##########################################
############## functions #################
##########################################
function print1($what) {
  Write-Host $what -foreground Green -NoNewline 
}

function println1($what) {
  Write-Host $what -foreground Magenta
}

Function ErrorsCount($errdir) {
    $data = Get-Content "$errdir\Build_Artifacts\Logs\Errors.log"

	return $data.count
}

function StartIIS($serverName){
    Try{
        Write-Host " ";
        Write-Host "-----------------------------------------------------";
        Write-Host "-----------------------------------------------------";
        Write-Host "Attempting to start IIS";
        Write-Host "-----------------------------------------------------";
     
        $start=Get-Date;
        $cred = GetCredentials;
         
        Invoke-Command –ComputerName $serverName –ScriptBlock { iisreset /start } -Authentication Default -Credential $cred
 
        $elapsedTime = new-timespan $start $(get-date);
        Write-Host "Sucessfully completed script.";
        Write-Host "Time taken to run script: " $elapsedTime;
    }
    Catch{
       Write-Host "There was an error running this powershell script";
       Write-Host $_.Exception.Message;
       return 0;
    }
    Finally{
        Write-Host "-----------------------------------------------------";
    }
}

function StopIIS($serverName){
    Try{
        Write-Host " ";
        Write-Host "-----------------------------------------------------";
        Write-Host "-----------------------------------------------------";
        Write-Host "Attempting to stop IIS";
        Write-Host "-----------------------------------------------------";
     
        $start=Get-Date;
        $cred = GetCredentials;
         
        Invoke-Command –ComputerName $serverName –ScriptBlock { iisreset /stop } -Authentication Default -Credential $cred
 
        $elapsedTime = new-timespan $start $(get-date);
        Write-Host "Sucessfully completed script.";
        Write-Host "Time taken to run script: " $elapsedTime;
    }
    Catch{
       Write-Host "There was an error running this powershell script";
       Write-Host $_.Exception.Message;
       return 0;
    }
    Finally{
        Write-Host "-----------------------------------------------------";
    }
}

function GetCredentials(){
    $username = "bgdev\ToLservices"
    $password = "ToLservices"
    $secstr = New-Object -TypeName System.Security.SecureString
    $password.ToCharArray() | ForEach-Object {$secstr.AppendChar($_)}
    $cred = new-object -typename System.Management.Automation.PSCredential -argumentlist $username, $secstr;

    return $cred;
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
    #BTC
    if ($SERVER -eq "btcweb") {
        robocopy /NFL $BUILDPATH\_PublishedApplications\infra.Quotes.QuoteService.Service\bin $DESTAPP\Quotes *.DLL *.EXE *.EXE.CONFIG /S /XF /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.RiskManager.Service\bin $DESTAPP\Risk_Manager *.DLL *.EXE *.EXE.CONFIG /S /XF /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TradingServerWindowsService\bin $DESTAPP\Trading_Server *.DLL *.EXE *.EXE.CONFIG /Purge /S /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.MarketMaker\bin $DESTAPP\TOL.MarketMaker *.DLL *.EXE *.EXE.CONFIG /S /MT:3

        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.AppServer.Service\bin $DESTAPP\App_Server *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.AppServer.Service\bin $DESTAPP\MerchantCertificates *.KEY *.PFX /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\Aff.AppServer.Service\bin $DESTAPP\AFF.APP *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\Aff.DealServer.Launcher\bin $DESTAPP\AFF.Deals *.DLL *.EXE *.EXE.CONFIG /Purge /S /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\AlertSystemHost\bin $DESTAPP\AlertSystem *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.BatchProcessing.Service\bin $DESTAPP\P4X.BatchProcessing *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\Http.NotificationServer.Launcher\bin $DESTAPP\AFF.HTTP *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\infra.Quotes.QuoteRelay.Service\bin $DESTAPP\QuotesRelay *.DLL *.EXE *.EXE.CONFIG /S /XF /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.AdvancedFeedWinService\bin $DESTAPP\P4X.Web.AdvancedFeedService *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.Export.Launcher\bin $DESTAPP\Export *.DLL *.EXE *.EXE.CONFIG /S /XF *.vshost.exe *.manifest /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.MailServerService\bin $DESTAPP\Mail *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32

        robocopy /NFL $BUILDPATH\..\..\Source\Images\Gamification\Avatars $DESTWEB\Gamification\Avatars *.* /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4XBO $DESTWEB\BO *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc  /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4XBO.MVC $DESTWEB\P4XBO.MVC *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc  /XD obj .svn /Purge /MT:32
        robocopy /NFL \\zeus\pm\HelpDocs\Upload_Documents $DESTWEB\BO\App_Data\Docs *.pdf *.xls /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.API.REST $DESTWEB\API.REST *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.API.B2B $DESTWEB\API.B2B *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /Purge /MT:32

        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4X.Web.Feed $DESTWEB\Feed_New *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4X.Web.AdvancedFeed $DESTWEB\P4X.Web.AdvancedFeed *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Widgets $DESTWEB\Widget *.* /E /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Widgets\App_Code $DESTWEB\Widget\App_Code *.cs  /Purge /MT:32

        robocopy /NFL $BUILDPATH\..\..\P4X\P4X.Web\TOL.Widgets\Widgets\V6 $DESTWEB\Widget\Widgets\V6 *.min.js /MT:32
        robocopy /NFL $BUILDPATH\..\..\P4X\P4X.Web\TOL.Widgets\Widgets\V7 $DESTWEB\Widget\Widgets\V7 *.min.js /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TLAffiliate_MVC $DESTWEB\AFF_MWL_MVC *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Log $DESTWEB\TOL.Log *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
    }
    #FEED
    if (($SERVER -eq "devserver") -or ($SERVER -eq "calypso") -or ($SERVER -eq "marley") -or ($SERVER -eq "feed-main") -or ($SERVER -eq "uat-web")) {
        robocopy /NFL $BUILDPATH\_PublishedApplications\infra.Quotes.QuoteService.Service\bin $DESTAPP\QuotesService *.DLL *.EXE *.EXE.CONFIG /S /XF /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.RiskManager.Service\bin $DESTAPP\TOL.RMService *.DLL *.EXE *.EXE.CONFIG /S /XF /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TradingServerWindowsService\bin $DESTAPP\TradingServerWindowsService *.DLL *.EXE *.EXE.CONFIG /Purge /S /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.MarketMaker\bin $DESTAPP\TOL.MarketMaker *.DLL *.EXE *.EXE.CONFIG /S /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.ForexServer.Service\bin $DESTAPP\ForexService *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.ForexServer.Service\FXCloudConfiguration $DESTAPP\ForexService\FXCloudConfiguration *.xml *.cfg /S /Purge /MT:32
		robocopy /NFL $BUILDPATH\_PublishedApplications\Infra.Quotes.Bridge.Service\bin $DESTAPP\Bridge *.DLL *.EXE *.EXE.CONFIG NLog.config /MT:32 
		robocopy /NFL $BUILDPATH\_PublishedApplications\Infra.Quotes.Bridge.Service\Data $DESTAPP\Bridge\Data *.csv list-btc.json list-usd.json mappings.json /MT:32 
		robocopy /NFL $BUILDPATH\_PublishedApplications\Infra.Quotes.BridgeFeed.Tests\bin $DESTAPP\QuotesBridgeTest *.DLL *.EXE *.json *.EXE.CONFIG /S /Purge /MT:32 
    }
    #APPS
    if (($SERVER -eq "devserver") -or ($SERVER -eq "calypso") -or ($SERVER -eq "marley") -or ($SERVER -eq "stageapps") -or ($SERVER -eq "uat-web")) {
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.AppServer.Service\bin $DESTAPP\AppService *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.AppServer.Service\bin $DESTAPP\MerchantCertificates *.KEY *.PFX /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\Aff.AppServer.Service\bin $DESTAPP\AffAppService *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\Aff.DealServer.Launcher\bin $DESTAPP\AffDealServer *.DLL *.EXE *.EXE.CONFIG /Purge /S /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\AlertSystemHost\bin $DESTAPP\AlertSystem *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.BatchProcessing.Service\bin $DESTAPP\P4X.BatchProcessing.Service *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\Http.NotificationServer.Launcher\bin $DESTAPP\HttpNotificationServer *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.DropCopyProcessor.Service\bin $DESTAPP\P4X.DropCopyProcessor.Service *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\infra.Quotes.QuoteRelay.Service\bin $DESTAPP\QuotesRelayService *.DLL *.EXE *.EXE.CONFIG /S /XF /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.AdvancedFeedWinService\bin $DESTAPP\TOL.AdvancedFeedWinService *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.Cantor.UserInfoSync.Launcher\bin $DESTAPP\Cantor.UserInfoSync.Launcher *.DLL *.EXE *.EXE.CONFIG /S /XF /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.TradingSignals.Launcher\bin $DESTAPP\TradingSignals *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
		robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.CryptoInvestServer.Service\bin $DESTAPP\TOL.CryptoInvestServer.Service *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32
    }
    #WEB - single server
    if (($SERVER -eq "devserver") -or ($SERVER -eq "calypso") -or ($SERVER -eq "marley") -or ($SERVER -eq "uat-web")) {
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.Export.Launcher\bin $DESTAPP\Export *.DLL *.EXE *.EXE.CONFIG /S /XF *.vshost.exe *.manifest /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.MailServerService\bin $DESTAPP\Mail *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32

        robocopy /NFL $BUILDPATH\..\..\Source\Images\Gamification\Avatars $DESTWEB\Gamification\Avatars *.* /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4XBO $DESTWEB\BO *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc  /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4XBO.MVC $DESTWEB\P4XBO.MVC *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc  /XD obj .svn /Purge /MT:32
        robocopy /NFL \\zeus\pm\HelpDocs\Upload_Documents $DESTWEB\BO\App_Data\Docs *.pdf *.xls /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.API.REST $DESTWEB\API.REST *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.API.B2B $DESTWEB\API.B2B *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4X.Web.Feed $DESTWEB\P4X.Web.Feed *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4X.Web.AdvancedFeed $DESTWEB\P4X.Web.AdvancedFeed *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Widgets $DESTWEB\Widgets *.* /E /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Widgets\App_Code $DESTWEB\Widgets\App_Code *.cs  /Purge /MT:32
        robocopy /NFL $BUILDPATH\..\..\P4X\P4X.Web\TOL.Widgets\Widgets\V6 $DESTWEB\Widgets\Widgets\V6 *.min.js /MT:32
        robocopy /NFL $BUILDPATH\..\..\P4X\P4X.Web\TOL.Widgets\Widgets\V7 $DESTWEB\Widgets\Widgets\V7 *.min.js /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TLAffiliate_MVC $DESTWEB\Affiliate_MVC *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
 
        robocopy /NFL $BUILDPATH\_PublishedWebsites\AgentSystem $DESTWEB\AgentSystem *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc  /XD obj .svn  /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Traderooms $DESTWEB\TOL.Traderooms *.* /E /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Expiries $DESTWEB\exp *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Log $DESTWEB\TOL.Log *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32

    }
    #WEB1, WEB2 - stage
    if (($SERVER -eq "stageweb1") -or ($SERVER -eq "stageweb2")) {
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.AppServer.Service\bin $DESTAPP\AppService *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32 
        robocopy /NFL $BUILDPATH\_PublishedApplications\P4X.AppServer.Service\bin $DESTAPP\MerchantCertificates *.KEY *.PFX /S /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\infra.Quotes.QuoteRelay.Service\bin $DESTAPP\QuotesRelayService *.DLL *.EXE *.EXE.CONFIG /S /XF /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.Export.Launcher\bin $DESTAPP\Export *.DLL *.EXE *.EXE.CONFIG /S /XF *.vshost.exe *.manifest /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedApplications\TOL.MailServerService\bin $DESTAPP\Mail *.DLL *.EXE *.EXE.CONFIG /S /Purge /MT:32

        robocopy /NFL $BUILDPATH\_PublishedWebsites\AgentSystem $DESTWEB\AgentSystem *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc  /XD obj .svn  /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Traderooms $DESTWEB\TOL.Traderooms *.* /E /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
        robocopy /NFL $BUILDPATH\..\..\Images\Gamification\Avatars $DESTWEB\Gamification\Avatars *.* /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4XBO $DESTWEB\BO *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc  /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4XBO.MVC $DESTWEB\P4XBO.MVC *.* /S /XF *.pdb *.cs *.dll.config  Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc  /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\AgentSystem $DESTWEB\AgentSystem *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc  /XD obj .svn  /Purge /MT:32
        robocopy /NFL \\zeus\pm\HelpDocs\Upload_Documents $DESTWEB\BO\App_Data\Docs *.pdf *.xls /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.API.REST $DESTWEB\API.REST *.* /S /XF *.pdb *.cs *.dll.config *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.API.B2B $DESTWEB\API.B2B *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4X.Web.Feed $DESTWEB\P4X.Web.Feed *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\P4X.Web.AdvancedFeed $DESTWEB\P4X.Web.AdvancedFeed *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Traderooms $DESTWEB\TOL.Traderooms *.* /E /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
      
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Widgets $DESTWEB\Widgets *.* /E /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Widgets\App_Code $DESTWEB\Widgets\App_Code *.cs  /Purge /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TOL.Log $DESTWEB\TOL.Log *.* /S /XF *.pdb *.cs Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
        robocopy /NFL $BUILDPATH\..\..\P4X\P4X.Web\TOL.Widgets\Widgets\V6 $DESTWEB\Widgets\Widgets\V6 *.min.js /MT:32
        robocopy /NFL $BUILDPATH\..\..\P4X\P4X.Web\TOL.Widgets\Widgets\V7 $DESTWEB\Widgets\Widgets\V7 *.min.js /MT:32
        robocopy /NFL $BUILDPATH\_PublishedWebsites\TLAffiliate_MVC $DESTWEB\Affiliate_MVC *.* /S /XF *.pdb *.cs *.dll.config Web.Debug.CONFIG Web.Release.CONFIG *.mdf *.sln *.csproj *.csproj.user *.vspscc /XD obj .svn  /Purge /MT:32
    }
    NET USE \\$SERVER\IPC$ /D
}

##########################################
############ end functions ###############
##########################################

#script starts from here
Clear-Host
#set dev as the default environment for the build
if ($Args[0] -eq $null) {
    $nameEnv = "dev"
    $isLocal = $true
}
else {
    $nameEnv = $Args[0]
    $isLocal = $false
}

if (($Args[1] -eq $null) -or ([string]::IsNullOrEmpty($Args[1]))) {
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
#set out location to the target location
Set-Location $baseDirectory

$BUILDPATH="$baseDirectory\Build_Artifacts\Binaries"
$ScriptPath = "C:\Processes\Batch\Scripts"
$err = ErrorsCount($baseDirectory)

if ($err -eq 0) {
    switch ($nameEnv) {
	    "dev" {
            StopIIS("devserver")
		    Run-BatchFile "devserver" "KillServices.bat" 90
            Start-Sleep -s 5
            CopyToServer "\\devserver\Processes\Batch" "\\devserver\wwwroot" "devserver"
            Run-BatchFile "devserver" "StartServices.bat" 120
            StartIIS("devserver")
            Break;
	    }
        "qa" {
            StopIIS("calypso")
            Run-BatchFile "calypso" "KillServices.bat" 90
            Start-Sleep -s 5
            CopyToServer "\\calypso\Processes\Batch" "\\calypso\wwwroot" "calypso"
            Run-BatchFile "calypso" "StartServices.bat" 120
            StartIIS("calypso")
            Break;
        }
        "Smoke" {
            StopIIS("marley")
		    Run-BatchFile "marley" "KillServices.bat" 90
            Start-Sleep -s 5
            CopyToServer "\\marley\Processes\Batch" "\\marley\wwwroot" "marley"
            Run-BatchFile "marley" "StartServices.bat" 120
            StartIIS("marley")
            Break;
        }
        "UAT" {
            StopIIS("uat-web")
		    Run-BatchFile "uat-web" "KillServices.bat" 90
            Start-Sleep -s 5
            CopyToServer "\\uat-web\Processes\Batch" "\\uat-web\wwwroot" "uat-web"
            Run-BatchFile "uat-web" "StartServices.bat" 120
            StartIIS("uat-web")
            Break;
        }
        "BTC" {
        StopIIS("btcweb")
		    Run-BatchFile "btcweb" "KillServices.bat" 60
            Start-Sleep -s 5
            CopyToServer "\\btcweb\Batch" "\\btcweb\wwwroot" "btcweb"
            Run-BatchFile "btcweb" "StartServices.bat" 120
            StartIIS("btcweb")
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
        StopIIS("stageweb1")
        StopIIS("stageweb2")
            Run-BatchFile "stageweb1" "KillServices.bat" 30
            Run-BatchFile "stageweb2" "KillServices.bat" 30
            Run-BatchFile "stageapps" "KillServices.bat" 90
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
            StartIIS("stageweb1")
            StartIIS("stageweb2")
            break;
        }
        "prod" {

            Break;
        }
        "btcprod" {

            Break;
        }
    }
}
else {
    write-host $err total errors.
    println1("Too many errors. Deploy not completed.")
}



