##########################################
############## functions #################
##########################################
function print1($what) {
  Write-Output $what -foreground Green -NoNewline
}

function println1($what) {
  Write-Output $what -foreground Magenta
}

#performs a transformation on the *.config files in the system using the ctt tool
function TransformConfigs {

    [CmdletBinding()]
    param(
        [Parameter(Mandatory=$False, Position=1)]
        $directory, 
        [Parameter(Mandatory=$False, Position=2)]
        $scriptPath
    )

    $a = Get-ChildItem -Path $directory -Recurse -Filter '*.config.base'

    foreach ($item in $a) {
        $filedir = $item.directoryname; 
        $base = $filedir + "\app.config.base"
        if (Test-Path $base) {
            $env = $filedir + "\app.config." + $nameEnv; 
            $output = $filedir + "\app.config";
	    }
        else {
            $base = $filedir + "\Web.config.base"
            if (Test-Path $base) {
                $env = $filedir + "\Web.config." + $nameEnv; 
                $output = $filedir + "\Web.config";
            }
        }
        if(($isLocal) -and (Test-Path $output)) {
            #skip config
        }
        else {
            try {
                $ErrorActionPreference = "Stop";
                $File = get-item $output;
                $File.IsReadOnly = $false;
            }
            Catch {$output + " is missing!"}
            finally {
                $ErrorActionPreference = "Continue"; #Reset the error action pref to default
            }

            $TransformCommand = "$scriptPath\ctt.exe s:$base t:$env d:$output;"
            invoke-Expression -Command $TransformCommand

            try {
                $ErrorActionPreference = "Stop";
                $File = get-item $output;
                $File.IsReadOnly = $true;
            }
            Catch {$output + " is missing!"}
            finally {
                $ErrorActionPreference = "Continue"; #Reset the error action pref to default
            }
        }
    }
}

function Fetch-Nuget($targetLocation ) {
    if (!(Test-Path(Join-Path $targetLocation "nuget.exe" ))) {
        # Work around PowerShell's Invoke-WebRequest not being available on some versions of PowerShell by using the BCL.
        # To do that we need to work around further and use absolute paths because DownloadFile is not aware of PowerShell's current directory.
        $target = Join-Path $targetLocation "nuget.exe"
        (New-Object System.Net.WebClient).DownloadFile("http://nuget.org/nuget.exe", $target)
    }
}

Function Run-BatchFile ($computer, [string]$batfilename) {
    Write-Output -ForegroundColor green "$batfilename"

    $pw=convertto-securestring "ToLbuild" -AsPlainText -Force
    $cred = New-Object System.Management.Automation.PsCredential("bgdev\ToLbuild",$pw)
    $sessions = New-PSSession -ComputerName $computer -Credential $cred

    Invoke-Command -Session $sessions -ScriptBlock {
      param($batfilename)
      & cmd.exe /c "$batfilename"
    } -ArgumentList $batfilename -AsJob
    Start-Sleep -s 60
    Remove-PSSession -Session $sessions
}

Function DisplayErrors {
    $data = Get-Content "$baseDirectory\Build_Artifacts\Logs\Errors.log"
	Write-Output $data.count total errors lines read from file
    foreach ($line in $data) {
        Write-Output $line
    }
}

Function ErrorsCount($errdir) {
    $data = Get-Content "$errdir\Build_Artifacts\Logs\Errors.log"

	return $data.count
}

function StartIIS($serverName){
    Try{
        Write-Output " ";
        Write-Output "-----------------------------------------------------";
        Write-Output "-----------------------------------------------------";
        Write-Output "Attempting to start IIS";
        Write-Output "-----------------------------------------------------";

        $start=Get-Date;
        $cred = GetCredentials;

        Invoke-Command –ComputerName $serverName –ScriptBlock { iisreset /start } -Authentication Default -Credential $cred

        $elapsedTime = new-timespan $start $(get-date);
        Write-Output "Sucessfully completed script.";
        Write-Output "Time taken to run script: " $elapsedTime;
    }
    Catch{
       Write-Output "There was an error running this powershell script";
       Write-Output $_.Exception.Message;
       return 0;
    }
    Finally{
        Write-Output "-----------------------------------------------------";
    }
}

function StopIIS($serverName){
    Try{
        Write-Output " ";
        Write-Output "-----------------------------------------------------";
        Write-Output "-----------------------------------------------------";
        Write-Output "Attempting to stop IIS";
        Write-Output "-----------------------------------------------------";

        $start=Get-Date;
        $cred = GetCredentials;

        Invoke-Command –ComputerName $serverName –ScriptBlock { iisreset /stop } -Authentication Default -Credential $cred

        $elapsedTime = new-timespan $start $(get-date);
        Write-Output "Sucessfully completed script.";
        Write-Output "Time taken to run script: " $elapsedTime;
    }
    Catch{
       Write-Output "There was an error running this powershell script";
       Write-Output $_.Exception.Message;
       return 0;
    }
    Finally{
        Write-Output "-----------------------------------------------------";
    }
}

function GetCredentials(){
    $username = "pxd\IIvanov-PC"
    $password = "lz2klrLom"
    $secstr = New-Object -TypeName System.Security.SecureString
    $password.ToCharArray() | ForEach-Object {$secstr.AppendChar($_)}
    $cred = new-object -typename System.Management.Automation.PSCredential -argumentlist $username, $secstr;

    return $cred;
}

Function CopyToServer {
    $DESTAPP = $Args[0]
	$DESTWEB = $Args[1]
    $SERVER = $Args[2]

    NET USE \\$SERVER\IPC$ /u:pxd\IIvanov /p:lz2klrLom

    if ($SERVER -eq "DATADESIGN") {
        robocopy /NFL $BUILDPATH\_PublishedWebsites\Store.Web $DESTWEB\Store.Web *.* /S /XF *.pdb *.cs *.dll.config  *.mdf *.sln *.csproj *.csproj.user *.vspscc  /XD obj .svn /Purge /MT:32
    }
    if ($SERVER -eq "IIVANOV-PC") {
        robocopy /NFL $BUILDPATH\_PublishedWebsites\Store.Web $DESTWEB\Store.Web *.* /S /XF *.pdb *.cs *.dll.config  *.mdf *.sln *.csproj *.csproj.user *.vspscc  /XD obj .svn /Purge /MT:32
    }

    net use \\$SERVER /D
}
##########################################
############ end functions ###############
##########################################


#script starts from here
Clear-Host
#set dev as the default environment for the build
if ($null -eq $Args[0]) {
    $nameEnv = "dev"
    $isLocal = $true
}
else {
    $nameEnv = $Args[0]
    $isLocal = $false
}

if (($null -eq $Args[1]) -or ([string]::IsNullOrEmpty($Args[1]))) {
    #we get the current location of the script as the default starting point
    $baseDirectory = split-path -parent $MyInvocation.MyCommand.Definition
    $baseDirectory = Join-Path -Path $PSScriptRoot -ChildPath ..\ -Resolve
}
else {
    $baseDirectory = $Args[1]
}

println1($baseDirectory)
#set out location to the target location
Set-Location $baseDirectory

##########################################
############## imports ###################
##########################################
#reference to the invoke-msbuild library https://github.com/deadlydog/Invoke-MsBuild
#modified to export a function that gets the msbuild path directly
Import-Module .\build_tools\Invoke-MsBuild.psm1
##########################################
############ end imports #################
##########################################

if(!(Test-Path ".\Build_Artifacts")) {
    new-item .\Build_Artifacts -ItemType directory
    new-item .\Build_Artifacts\Logs -ItemType directory
}

#set up the location for the different targets and tools
#$binaryDirectory = "$baseDirectory\..\Binaries"
$binaryDirectory = "$baseDirectory\Build_Artifacts\Binaries\"
$msbuild = Get-LatestMsBuildPath false
$logfilepath = "$baseDirectory\Build_Artifacts\Logs\msbuild.log"
$errorlogfilepath = "$baseDirectory\Build_Artifacts\Logs\errors.log"
$solutionFilesPath = "$baseDirectory\SolutionsConfig.txt"
$cttPath = "$baseDirectory\build_tools\"
#we get the manually compiled list of solutions
$projectFiles = Get-Content $solutionFilesPath
#check for the existance of nuget, if it doesnt exist the function will download it automatically
Write-Output "Fetching NuGet."
$nuget = "$baseDirectory\build_tools\nuget.exe"
Fetch-Nuget (Join-Path $baseDirectory "\build_tools\")
#we first run nuget restore on all .sln files in the target sub-folders recursively
$solutionsList = Get-ChildItem "$baseDirectory" -Recurse -Filter *.sln

foreach ($item in $solutionsList) {

    $solution = Get-ChildItem $item.FullName
    $filedir = $solution.DirectoryName;
    $filename = [System.IO.Path]::GetFileName($solution)
    Write-Output $filedir\$filename -foreground Magenta
    Write-Output "NuGet Restore"
    & $nuget restore -ConfigFile nuget.config $filedir\$filename
}

#we remove old log files if they exist
if (Test-Path $logfilepath) {
    Remove-Item $logfilepath
}

if (Test-Path $errorlogfilepath) {
    Remove-Item $errorlogfilepath
}

#we perform the needed transformation on the config files 
TransformConfigs $baseDirectory $cttPath

foreach ($projectFile in $projectFiles) {
	if($projectFile.EndsWith(".sln")) { 

		Write-Output $projectFile -foreground Magenta
		$projectFileAbsPath = "$baseDirectory\$projectFile"

		$filename = [System.IO.Path]::GetFileName($projectFile);
		$fileDir = [System.IO.Path]::GetDirectoryName($projectFile);
		$action = "Y"
		while ($action -eq "Y") {
			if (Test-Path $projectFileAbsPath) {

				if ($null -eq $Args[0]) {
					Write-Output "Building $projectFileAbsPath"
					<#$collectionofArgs = @($projectFileAbsPath, "/target:Clean", "/target:clean_folders", "/target:Build", "/p:Configuration=Debug", "/fl1", "/fl2", "/flp1:Verbosity=normal;LogFile=$logfilepath;Append=true", "/flp2:Verbosity=normal;LogFile=$errorlogfilepath;Append=true;errorsonly")
					& $msbuild $collectionofArgs#>
					$collectionofArgs = @($projectFileAbsPath, "/target:Clean;Build", "/p:Configuration=Debug", "/fl1", "/fl2", "/flp1:Verbosity=normal;LogFile=$logfilepath;Append=true", "/flp2:Verbosity=normal;LogFile=$errorlogfilepath;Append=true;errorsonly")
					& $msbuild $collectionofArgs

				}
				else {
					Write-Output "Building $projectFileAbsPath"
					$collectionofArgs = @($projectFileAbsPath, "/target:Clean;Build", "/p:Configuration=Release", "/property:outdir=$binaryDirectory", "/fl1", "/fl2", "/flp1:Verbosity=normal;LogFile=$logfilepath;Append=true", "/flp2:Verbosity=detailed;LogFile=$errorlogfilepath;Append=true;errorsonly")
					& $msbuild $collectionofArgs
					<#$collectionofArgs = @($projectFileAbsPath,  "/target:Build", "/p:Configuration=Release", "/property:outdir=$binaryDirectory", "/fl1", "/fl2", "/flp1:Verbosity=normal;LogFile=$logfilepath;Append=true", "/flp2:Verbosity=detailed;LogFile=$errorlogfilepath;Append=true;errorsonly")
					& $msbuild $collectionofArgs#>
				}

				if ($LASTEXITCODE -eq 0) {
					Write-Output "Build SUCCESS" -ForegroundColor Green
					Clear-Host
					break
				}
				else {
					Write-Output "Build FAILED" -ForegroundColor Red

					#$action = Read-Host "Enter Y to Fix then continue, N to Terminate, I to Ignore and continue the build"

					$action = "I"

					if ($action -eq "Y") {
						(Start-Process $projectFileAbsPath -PassThru).WaitForExit()
					}
					else {
						if ($action -eq "I") {
							Write-Output "Ignoring build failure..."
							break
						}
						else {
							Write-Output "Terminating Build... Please restart the build once the issue is fixed." -ForegroundColor Red
							break
						}
					}
				}
			}
			else {
				Write-Output "File does not exist : $projectFileAbsPath"
				Start-Sleep -s 5
				break
			}
		}

		if ($action -eq "N") {
			break;
		}
	}
}
#we display errors.log
println1("Display errors...")
DisplayErrors

$BUILDPATH="$baseDirectory\Build_Artifacts\Binaries"
$ScriptPath = "C:\Processes\Batch\Scripts"
$err = ErrorsCount($baseDirectory)

if ($err -eq 0) {
    switch ($nameEnv) {
	    "dev" {
            #StopIIS("DATADESIGN")
		    #Run-BatchFile "devserver" "KillServices.bat" 90
            #Start-Sleep -s 5
            CopyToServer "\\DATADESIGN\Processes\Batch" "\\DATADESIGN\c$\inetpub\wwwroot" "DATADESIGN"
            #Run-BatchFile "DATADESIGN" "StartServices.bat" 120
            #StartIIS("DATADESIGN")
            Break;
	    }
        "qa" {
            #StopIIS("calypso")
            #Run-BatchFile "calypso" "KillServices.bat" 90
            #Start-Sleep -s 5
            CopyToServer "\\IIvanov-PC\Processes\Batch" "c:\inetpub\wwwroot" "IIvanov-PC"
            #Run-BatchFile "calypso" "StartServices.bat" 120
            #StartIIS("calypso")
            Break;
        }
    }
}
else {
    Write-Output $err total errors.
    println1("Too many errors. Deploy not completed.")
}