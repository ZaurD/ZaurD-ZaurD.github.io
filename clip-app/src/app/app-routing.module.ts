import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/clip/components/home/home.component';
import { SearchClipComponent } from './modules/clip/components/search-clip/search-clip.component';
import { AddClipComponent } from './modules/clip/components/add-clip/add-clip.component';
import { ClipsListComponent } from './modules/clip/components/clips-list/clips-list.component';
import { PersonalCabinetComponent } from './modules/clip/components/personal-cabinet/personal-cabinet.component';
import { PersonalCabinetGuard } from './modules/clip/guards/personal-cabinet.guard';
import { AboutComponent } from './modules/clip/components/about/about.component';
import { ContactComponent } from './modules/clip/components/contact/contact.component';
import { HotClipsComponent } from './modules/clip/components/hot-clips/hot-clips.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'hits2022', component: HotClipsComponent },
  { path: 'search', component: SearchClipComponent },
  {
    path: 'personalcabinet',
    component: PersonalCabinetComponent,
    canActivate: [PersonalCabinetGuard],
    children: [
      { path: 'myplaylist', component: ClipsListComponent },
      { path: 'myplaylist/:id', component: ClipsListComponent },
      { path: 'add', component: AddClipComponent },
      { path: '**', redirectTo: '/personalcabinet/myplaylist' },
    ],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
