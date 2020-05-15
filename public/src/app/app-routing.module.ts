import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { VideoComponent } from './video/video.component';
import { ChannelComponent } from './channel/channel.component';
import { DistortedChannelComponent } from  './distorted-channel/distorted-channel.component';
import { HomeDistortedComponent } from './home-distorted/home-distorted.component';
import { DistortedVideoComponent } from './distorted-video/distorted-video.component';




const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'channels/user666', component: ChannelComponent},
{path: '666', component: SearchResultComponent},
{path: 'watch7iFXyLah2oQt', component: VideoComponent},
{path: 'dstrvideo', component: DistortedVideoComponent},
{path: 'dstrchannel', component: DistortedChannelComponent},
{path: 'dstrhome', component: HomeDistortedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
