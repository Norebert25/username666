import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChannelComponent } from './channel/channel.component';
import { DistortedChannelComponent } from './distorted-channel/distorted-channel.component';
import { HomeDistortedComponent } from './home-distorted/home-distorted.component';
import { DistortedVideoComponent } from './distorted-video/distorted-video.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    HomeComponent,
    SearchResultComponent,
    SidebarComponent,
    ChannelComponent,
    DistortedChannelComponent,
    HomeDistortedComponent,
    DistortedVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
