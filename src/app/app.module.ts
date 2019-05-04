import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { SearchServiceService } from "../app/services/search-service.service"
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [SearchServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
