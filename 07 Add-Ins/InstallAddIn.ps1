if ((Get-PSSnapin "Microsoft.SharePoint.PowerShell" -ErrorAction SilentlyContinue) -eq $null) 
{
    Add-PSSnapin "Microsoft.SharePoint.PowerShell"
}

$url = "http://sp2016/"
$appTitle = "SPHostedAddIn"
$appPackage = "D:\SPHostedAddIn.app"

# Example of using Import-SPAppPackage

$app = Import-SPAppPackage -Path $appPackage -Site $url -Source ([microsoft.sharepoint.administration.spappsource]::CorporateCatalog) -Confirm:$false

# Install an App in a SiteCollection

Install-SPApp -Web $url -Identity $app

Write-Host "App installed: " $appTitle