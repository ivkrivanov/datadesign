##########################################
############## functions #################
##########################################
function print1($what) {
  Write-Host $what -foreground Green -NoNewline 
}

function println1($what) {
  Write-Host $what -foreground Magenta
}
#run bat files remotely
Function Run-BatchFile ($computer, [string]$batfilename, [int]$delay) {
    $pw=convertto-securestring "ToLservices"-AsPlainText -Force
    $cred = New-Object System.Management.Automation.PsCredential("bgdev\ToLservices",$pw)
    $sessions = New-PSSession -ComputerName $computer -Credential $cred

    Invoke-Command -Session $sessions -ScriptBlock {
      param($batfilename)
      & cmd.exe /c "C:\Processes\Batch\Scripts\$batfilename"
    } -ArgumentList $batfilename -AsJob
    Start-Sleep -s $delay
    Remove-PSSession -Session $sessions
}

#Copiyng compiled applications on environments
Function CopyToServer {
    $DESTAPP = $Args[0]
    $DESTWEB = $Args[1]
    $SERVER = $Args[2]

    $IPCUser = "bgdev\ToLservices"                  
    $IPCPwd  = "ToLservices"        
    
    NET USE \\$SERVER\IPC$ /u:$IPCUser $IPCPwd 

    robocopy /NFL $BUILDPATH\..\..\Configs\$nameEnv $DESTAPP\Configs *.connections.config /MT:32
    #FEED
    if (($SERVER -eq "devserver") -or ($SERVER -eq "calypso") -or ($SERVER -eq "marley") -or ($SERVER -eq "feed-main") -or ($SERVER -eq "btc-web") -or ($SERVER -eq "uat-web") -or ($SERVER -eq "pciweb")) {
        #robocopy /NFL $BUILDPATH\_PublishedApplications\infra.Quotes.QuoteService\bin $DESTAPP\Quotes *.DLL *.EXE *.EXE.CONFIG /S /XF /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.RiskManagerService\bin $DESTAPP\RM *.DLL *.EXE *.EXE.CONFIG /S /XF /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.RiskManager.Service\bin $DESTAPP\TOL.RMService *.DLL *.EXE *.EXE.CONFIG /S /XF /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TradingServerWindowsService\bin $DESTAPP\TradingServerWindowsService *.DLL *.EXE *.EXE.CONFIG /Purge /S /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.MarketMaker\bin $DESTAPP\TOL.MarketMaker *.DLL *.EXE *.EXE.CONFIG /S /MT:3

        if( $nameEnv -ne "BTC") {   
            robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.ForexServer.Launcher\bin $DESTAPP\ForexServer *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
            robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.ForexServer.Service\bin $DESTAPP\ForexService *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        }
    }
    #APPS
    if (($SERVER -eq "devserver") -or ($SERVER -eq "calypso") -or ($SERVER -eq "marley") -or ($SERVER -eq "stageapps") -or ($SERVER -eq "btc-web") -or ($SERVER -eq "uat-web") -or ($SERVER -eq "pciweb")) {
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.AppServer.Service\bin $DESTAPP\AppService *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.AppServer.Service\bin $DESTAPP\MerchantCertificates *.KEY *.PFX /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\Aff.AppServer.Service\bin $DESTAPP\AffAppService *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\Aff.DealServer.Launcher\bin $DESTAPP\AffDealServer *.DLL *.EXE *.EXE.CONFIG /Purge /S /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\AlertSystemHost\bin $DESTAPP\AlertSystem *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.BatchProcessing\bin $DESTAPP\P4X.BatchProcessing *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.BatchProcessing.Service\bin $DESTAPP\P4X.BatchProcessing.Service *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\Http.NotificationServer.Launcher\bin $DESTAPP\HttpNotificationServer *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.DropCopyProcessor.Service\bin $DESTAPP\P4X.DropCopyProcessor.Service *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\infra.Quotes.QuoteRelay\bin $DESTAPP\QuotesRelay *.DLL *.EXE *.EXE.CONFIG /S /XF /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\infra.Quotes.QuoteRelay.Service\bin $DESTAPP\QuotesRelayService *.DLL *.EXE *.EXE.CONFIG /S /XF /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.AdvancedFeedWinService\bin $DESTAPP\TOL.AdvancedFeedWinService *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.Cantor.UserInfoSync.Launcher\bin $DESTAPP\Cantor.UserInfoSync.Launcher *.DLL *.EXE *.EXE.CONFIG /S /XF /Purge /MT:32

        if( $nameEnv -ne "BTC") {   
            robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.TradingSignals.Launcher\bin $DESTAPP\TradingSignals *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        }
    }
    #WEB - single server
    if (($SERVER -eq "devserver") -or ($SERVER -eq "calypso") -or ($SERVER -eq "marley") -or ($SERVER -eq "btc-web") -or ($SERVER -eq "uat-web") -or ($SERVER -eq "pciweb")) {
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.Export.Launcher\bin $DESTAPP\Export *.DLL *.EXE *.EXE.CONFIG /S /XF *.vshost.exe *.manifest /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.MailServerService\bin $DESTAPP\Mail *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32

        robocopy /NFL $BUILDPATH\..\..\Source\Images\Gamification\Avatars $DESTWEB\Gamification\Avatars *.* /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4XBO $DESTWEB\BO *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc  /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4XBO.MVC $DESTWEB\P4XBO.MVC *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc  /XD obj .svn /Purge /MT:32
        robocopy /NFL \\zeus\pm\HelpDocs\Upload_Documents $DESTWEB\BO\App_Data\Docs *.pdf *.xls /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.API.REST $DESTWEB\API.REST *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.API.B2B $DESTWEB\API.B2B *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.API.SOAP $DESTWEB\TOL.API.SOAP *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4X.Web.Feed $DESTWEB\P4X.Web.Feed *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4X.Web.AdvancedFeed $DESTWEB\P4X.Web.AdvancedFeed *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Widgets $DESTWEB\Widgets *.* /E /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Widgets\App_Code $DESTWEB\Widgets\App_Code *.cs  /Purge /MT:32
        #robocopy /NFL $BUILDPATH\..\Sources\P4X\P4X.Web\TOL.Widgets $DESTWEB\Widgets web.config *.min.js /MT:32
        #robocopy /NFL $BUILDPATH\..\Sources\P4X\P4X.Web\TOL.Widgets\Widgets\V5 $DESTWEB\Widgets\Widgets\V5 *.min.js /MT:32
        robocopy /NFL $BUILDPATH\..\..\P4X\P4X.Web\TOL.Widgets\Widgets\V6 $DESTWEB\Widgets\Widgets\V6 *.min.js /MT:32
        robocopy /NFL $BUILDPATH\..\..\P4X\P4X.Web\TOL.Widgets\Widgets\V7 $DESTWEB\Widgets\Widgets\V7 *.min.js /MT:32
        #robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.WidgetsWeb $DESTWEB\WidgetsWeb *.* /E /XF *.pdb *.cs Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TLAffiliate_MVC $DESTWEB\Affiliate_MVC *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
        if( $nameEnv -ne "BTC") {   
            robocopy /NFL $BUILDPATH\_PublishedWebsites\AgentSystem $DESTWEB\AgentSystem *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc  /XD obj .svn  /Purge /MT:32
            robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Traderooms $DESTWEB\TOL.Traderooms *.* /E /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
            robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Expiries $DESTWEB\exp *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
            #robocopy /NFL $BUILDPATH\_PublishedWebsites\TLAffiliate $DESTWEB\AffiliateMWL *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
            robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Log $DESTWEB\TOL.Log *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
        }
    }
    #WEB1, WEB2 - stage
    if (($SERVER -eq "stageweb1") -or ($SERVER -eq "stageweb2")) {
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.AppServer.Service\bin $DESTAPP\AppService *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.AppServer.Service\bin $DESTAPP\MerchantCertificates *.KEY *.PFX /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\infra.Quotes.QuoteRelay\bin $DESTAPP\QuotesRelay *.DLL *.EXE *.EXE.CONFIG /S /XF /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\infra.Quotes.QuoteRelay.Service\bin $DESTAPP\QuotesRelayService *.DLL *.EXE *.EXE.CONFIG /S /XF /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.Export.Launcher\bin $DESTAPP\Export *.DLL *.EXE *.EXE.CONFIG /S /XF *.vshost.exe *.manifest /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.MailServerService\bin $DESTAPP\Mail *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32

        robocopy /NFL $BUILDPATH\_PublishedWebsites\AgentSystem $DESTWEB\AgentSystem *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc  /XD obj .svn  /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Traderooms $DESTWEB\TOL.Traderooms *.* /E /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
        #robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Expiries $DESTWEB\exp *.* /S /XF *.pdb *.cs Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
        #robocopy /NFL $BUILDPATH\_PublishedWebsites\TLAffiliate $DESTWEB\AffiliateMWL *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32

        robocopy /NFL $BUILDPATH\..\..\Images\Gamification\Avatars $DESTWEB\Gamification\Avatars *.* /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4XBO $DESTWEB\BO *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc  /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4XBO.MVC $DESTWEB\P4XBO.MVC *.* /S /XF *.pdb *.cs*.dll.config  Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc  /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\AgentSystem $DESTWEB\AgentSystem *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc  /XD obj .svn  /Purge /MT:32
        robocopy /NFL \\zeus\pm\HelpDocs\Upload_Documents $DESTWEB\BO\App_Data\Docs *.pdf *.xls /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.API.REST $DESTWEB\API.REST *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.API.B2B $DESTWEB\API.B2B *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.API.SOAP $DESTWEB\TOL.API.SOAP *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4X.Web.Feed $DESTWEB\P4X.Web.Feed *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4X.Web.AdvancedFeed $DESTWEB\P4X.Web.AdvancedFeed *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Traderooms $DESTWEB\TOL.Traderooms *.* /E /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
      
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Widgets $DESTWEB\Widgets *.* /E /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Widgets\App_Code $DESTWEB\Widgets\App_Code *.cs  /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Log $DESTWEB\TOL.Log *.* /S /XF *.pdb *.cs Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32

        #robocopy /NFL $BUILDPATH\..\Sources\P4X\P4X.Web\TOL.Widgets $DESTWEB\Widgets web.config *.min.js /MT:32
        #robocopy /NFL $BUILDPATH\..\Sources\P4X\P4X.Web\TOL.Widgets\Widgets\V5 $DESTWEB\Widgets\Widgets\V5 *.min.js /MT:32
        robocopy /NFL $BUILDPATH\..\..\P4X\P4X.Web\TOL.Widgets\Widgets\V6 $DESTWEB\Widgets\Widgets\V6 *.min.js /MT:32
        robocopy /NFL $BUILDPATH\..\..\P4X\P4X.Web\TOL.Widgets\Widgets\V7 $DESTWEB\Widgets\Widgets\V7 *.min.js /MT:32
        #robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.WidgetsWeb $DESTWEB\WidgetsWeb *.* /E /XF *.pdb *.cs Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TLAffiliate_MVC $DESTWEB\Affiliate_MVC *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
    }
    NET USE \\$SERVER\IPC$ /D
}

##########################################
############ end functions ###############
##########################################


#script starts from here
Clear-Host

<#
if ($Args[0] -eq $null) {
    #we get the current location of the script as the default starting point
    $baseDirectory = split-path -parent $MyInvocation.MyCommand.Definition
}
#>
if (($Args[0] -eq $null) -or ([string]::IsNullOrEmpty($Args[0]))) {
    #we get the current location of the script as the default starting point
    $baseDirectory = split-path -parent $MyInvocation.MyCommand.Definition
    $baseDirectory = Join-Path -Path $PSScriptRoot -ChildPath ..\ -Resolve
}
else {
    $baseDirectory = $Args[0]
}

#set dev as the default environment for the build
if ($Args[1] -eq $null) {
    $nameEnv = "dev"
}
else {
    $nameEnv = $Args[1]
}

#set out location to the target location
Set-Location $baseDirectory

$BUILDPATH="$baseDirectory\Build_Artifacts\Binaries"
$ScriptPath = "C:\Processes\Batch\Scripts"

switch ($nameEnv) {
	"dev" {
		Run-BatchFile "devserver" "KillServices.bat" 60 
        Start-Sleep -s 5
        CopyToServer "\\devserver\Processes\Batch" "\\devserver\wwwroot" "devserver"
        Run-BatchFile "devserver" "StartServices.bat" 120
        Break;
	}
    "qa" {
        Run-BatchFile "calypso" "KillServices.bat" 60
        Start-Sleep -s 5
        CopyToServer "\\calypso\Processes\Batch" "\\calypso\wwwroot" "calypso"
        Run-BatchFile "calypso" "StartServices.bat" 120
        Break;
    }
    "Smoke" {
		Run-BatchFile "marley" "KillServices.bat" 60
        Start-Sleep -s 5
        CopyToServer "\\marley\Processes\Batch" "\\marley\wwwroot" "marley"
        Run-BatchFile "marley" "StartServices.bat" 120
        Break;
    }
    "UAT" {
		Run-BatchFile "uat-web" "KillServices.bat" 60
        Start-Sleep -s 5
        CopyToServer "\\uat-web\Processes\Batch" "\\uat-web\wwwroot" "uat-web"
        Run-BatchFile "uat-web" "StartServices.bat" 120
        Break;
    }
    "BTC" {
		Run-BatchFile "btcweb" "KillServices.bat" 60
        Start-Sleep -s 5
        CopyToServer "\\btcweb\Batch" "\\btcweb\wwwroot" "btcweb"
        Run-BatchFile "btcweb" "StartServices.bat" 120
        Break;
    }
    "PCI" {
		Run-BatchFile "pciweb" "KillServices.bat" 60
        Start-Sleep -s 5
        CopyToServer "\\btcweb\Batch" "\\btcweb\wwwroot" "pciweb"
        Run-BatchFile "pciweb" "StartServices.bat" 120 
        Break;
    }
    "stagew" {
        Run-BatchFile "stageweb1" "KillServices.bat" 30
        Run-BatchFile "stageweb2" "KillServices.bat" 30
        Run-BatchFile "stageapps" "KillServices.bat" 60
        Run-BatchFile "feed-main" "KillServices.bat" 45
        Start-Sleep -s 5
        CopyToServer "\\feed-main\Batch" "" "feed-main"
        CopyToServer "\\stageapps\Batch" "" "stageapps"
        CopyToServer "\\stageweb1\Batch" "\\stageweb1\wwwroot" "stageweb1"
        CopyToServer "\\stageweb2\Batch" "\\stageweb2\wwwroot" "stageweb2"

        Run-BatchFile "feed-main" "StartServices.bat" 45
        Run-BatchFile "stageapps" "StartServices.bat" 90
        Run-BatchFile "stageweb1" "StartServices.bat" 30
        Run-BatchFile "stageweb2" "StartServices.bat" 30
        break;
    }
    "prod" {

        Break;
    }
    "btcprod" {

        Break;
    }
}



