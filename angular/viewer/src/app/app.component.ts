import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DxReportViewerModule } from 'devexpress-reporting-angular';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
	RouterOutlet,
	DxReportViewerModule
  ],
  templateUrl: './app.component.html',
  styleUrls: [
    "../../node_modules/devextreme/dist/css/dx.light.css",
    "../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css",
    "../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.light.css",
    "../../node_modules/devexpress-reporting/dist/css/dx-webdocumentviewer.css"
]
})
export class AppComponent {
	title = 'DXReportViewerSample';
	reportUrl: string = 'TestReport';
	hostUrl: string = 'https://localhost:5001/';
	invokeAction: string = '/DXXRDV';
}
