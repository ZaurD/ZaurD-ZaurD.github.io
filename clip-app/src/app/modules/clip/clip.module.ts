import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ClipsListComponent } from './components/clips-list/clips-list.component';
import { AddClipComponent } from './components/add-clip/add-clip.component';
import { SearchClipComponent } from './components/search-clip/search-clip.component';
import { ClipComponent } from './components/clip/clip.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PersonalCabinetComponent } from './components/personal-cabinet/personal-cabinet.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HotClipsComponent } from './components/hot-clips/hot-clips.component';
import { FavoriteClipComponent } from './components/favorite-clip/favorite-clip.component';


@NgModule({
  declarations: [
    ToolBarComponent,
    HomeComponent,
    ClipsListComponent,
    AddClipComponent,
    SearchClipComponent,
    ClipComponent,
    PersonalCabinetComponent,
    AboutComponent,
    ContactComponent,
    HotClipsComponent,
    FavoriteClipComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    ToolBarComponent
  ]
})
export class ClipModule { }
