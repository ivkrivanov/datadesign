##########################################
############## functions #################
##########################################
function print1($what) {
  Write-Host $what -foreground Green -NoNewline
}

function println1($what) {
  Write-Host $what -foreground Magenta
}
#performs a transformation on the app.config files in the system using the ctt tool
function AppConfig ($directory, $cttPath) {
    $a = Get-ChildItem -Path $directory -Recurse -Filter app.config.base

    foreach ($item in $a) {
        $filedir = $item.directoryname; 
        $s = $filedir + "\App.config.base"; 
        $t = $filedir + "\App.config." + $nameEnv; 
        $d = $filedir + "\App.config";
	    
        if(($isLocal) -and (Test-Path $d)) {
            #skip config
        }
        else {
            try {
                $ErrorActionPreference = "Stop";
                $File = get-item $d;
                $File.IsReadOnly = $false;
            }
            Catch {$d + " is missing!"}
            finally {
                $ErrorActionPreference = "Continue"; #Reset the error action pref to default
            }

            $cttCommand = "$cttPath\ctt.exe s:$s t:$t d:$d;"
            invoke-Expression -Command $cttCommand

            try {
                $ErrorActionPreference = "Stop";
                $File = get-item $d;
                $File.IsReadOnly = $true;
            }
            Catch {$d + " is missing!"}
            finally {
                $ErrorActionPreference = "Continue"; #Reset the error action pref to default
            }
        }
    }
}
#performs a transformation on the web.config files in the system using the ctt tool
function WebConfig ($directory, $cttPath) {
    $a = Get-ChildItem -Path $directory -Recurse -Filter web.config.base

    foreach ($item in $a) {
        $filedir = $item.directoryname; 
        $s = $filedir + "\Web.config.base"; 
        $t = $filedir + "\Web.config." + $nameEnv; 
        $d = $filedir + "\Web.config";
	    
        if(($isLocal) -and (Test-Path $d)) {
            #skip config
        }
        else {
            try {
                $ErrorActionPreference = "Stop";
                $File = get-item $d;
                $File.IsReadOnly = $false;
            }
            Catch {$d + " is missing!"}
            finally {
                $ErrorActionPreference = "Continue"; #Reset the error action pref to default
            }

            $cttCommand = "$cttPath\ctt.exe s:$s t:$t d:$d;"
            invoke-Expression -Command $cttCommand

            try {
                $ErrorActionPreference = "Stop";
                $File = get-item $d;
                $File.IsReadOnly = $true;
            }
            Catch {$d + " is missing!"}
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
    Write-Host -ForegroundColor green "$batfilename"

    $pw=convertto-securestring "ToLbuild"-AsPlainText -Force
    $cred = New-Object System.Management.Automation.PsCredential("bgdev\ToLbuild",$pw)
    $sessions = New-PSSession -ComputerName $computer -Credential $cred

    Invoke-Command -Session $sessions -ScriptBlock {
      param($batfilename)
      & cmd.exe /c "$batfilename"
    } -ArgumentList $batfilename -AsJob
    Start-Sleep -s 60
    Remove-PSSession -Session $sessions
}

#minifying widgets
Function jsMinifiyng {
    Write-Host -ForegroundColor green "Processing minified js files - setting them to be readonly"
    
    Write-Host -ForegroundColor green "Minifiyng V6"
        Start-Process $baseDirectory\P4X\P4X.WEB\TOL.Widgets\Widgets\v6\lib\external\compresor\build.bat

    Write-Host -ForegroundColor green "Minifiyng V7"
        Start-Process $baseDirectory\P4X\P4X.WEB\TOL.Widgets\Widgets\v7\lib\external\compresor\build.bat

    Write-Host -ForegroundColor green "Minifiying completed"
}
##########################################
############ end functions ###############
##########################################


#script starts from here
Clear-Host

if (($Args[0] -eq $null) -or ([string]::IsNullOrEmpty($Args[0]))) {
    #we get the current location of the script as the default starting point
    $baseDirectory = split-path -parent $MyInvocation.MyCommand.Definition
    $baseDirectory = Join-Path -Path $PSScriptRoot -ChildPath ..\ -Resolve
}
else {
    $baseDirectory = $Args[0]
}

println1($baseDirectory)

#set dev as the default environment for the build
if ($Args[1] -eq $null) {
    $nameEnv = "dev"
    $isLocal = $true
}
else {
    $nameEnv = $Args[1]
    $isLocal = $false
}

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

if(! (Test-Path ".\Build_Artifacts")) {
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

$cttPath = "$baseDirectory\Build_Tools\"
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
    Write-Host $filedir\$filename -foreground Magenta

    Write-Host "NuGet Restore" 
    & $nuget restore -ConfigFile nuget.config $filedir\$filename
} 

<#
#next we restore the legacy libs manually
Write-Host "NuGet Restore" 
    & $nuget restore -ConfigFile nuget.config "$baseDirectory\packages.config" -PackagesDirectory .\packages

#we restore the libs into their legacy location if they don't already exist
if(! (Test-Path ".\lib")) {
	Move-Item packages\LegacyLib.1.0.0\ .\lib -Force
}

if(! (Test-Path "..\EntLib41Src")) {
	Move-Item packages\EntLib41Src.1.0.0\ ..\EntLib41Src -Force
}
#>
#we remove old log files if they exist
if (Test-Path $logfilepath) {
    Remove-Item $logfilepath
}

if (Test-Path $errorlogfilepath) {
    Remove-Item $errorlogfilepath
}

<#we perform widgets.min.js
jsMinifiyng
#we perform the needed transformation on the config files 
AppConfig $baseDirectory $cttPath
WebConfig $baseDirectory $cttPath
#>

foreach ($projectFile in $projectFiles) {
	if($projectFile.EndsWith(".sln")) { 

		Write-Host $projectFile -foreground Magenta
		$projectFileAbsPath = "$baseDirectory\$projectFile"
        
		$filename = [System.IO.Path]::GetFileName($projectFile); 
		$fileDir = [System.IO.Path]::GetDirectoryName($projectFile); 
		$action = "Y"  
		while ($action -eq "Y") {
			if (Test-Path $projectFileAbsPath) {
               
				if ($Args[0] -eq $null) {   
					Write-Host "Building $projectFileAbsPath"
					$collectionofArgs = @($projectFileAbsPath, "/target:Clean", "/target:Build", "/p:Configuration=Debug", "/fl1", "/fl2", "/flp1:Verbosity=normal;LogFile=$logfilepath;Append=true", "/flp2:Verbosity=normal;LogFile=$errorlogfilepath;Append=true;errorsonly")
					& $msbuild $collectionofArgs
				}
				else {
					Write-Host "Building $projectFileAbsPath"
					$collectionofArgs = @($projectFileAbsPath, "/target:Rebuild", "/p:Configuration=Release", "/property:outdir=$binaryDirectory", "/fl1", "/fl2", "/flp1:Verbosity=normal;LogFile=$logfilepath;Append=true", "/flp2:Verbosity=detailed;LogFile=$errorlogfilepath;Append=true;errorsonly")
					& $msbuild $collectionofArgs
				}

				if ($LASTEXITCODE -eq 0) {
					Write-Host "Build SUCCESS" -ForegroundColor Green
					Clear-Host
					break
				}
				else {
					Write-Host "Build FAILED" -ForegroundColor Red
                    
					#$action = Read-Host "Enter Y to Fix then continue, N to Terminate, I to Ignore and continue the build"
                    
					$action = "I"

					if ($action -eq "Y") {
						(Start-Process $projectFileAbsPath -PassThru).WaitForExit()
					}
					else {
						if ($action -eq "I") {
							Write-Host "Ignoring build failure..."
							break
						}
						else {
							Write-Host "Terminating Build... Please restart the build once the issue is fixed." -ForegroundColor Red
							break
						}
					}
				}
			}
			else {
				Write-Host "File does not exist : $projectFileAbsPath"
				Start-Sleep -s 5
				break
			}
		}
        
		if ($action -eq "N") {
			break;
		}
	}
}