import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClipsDbjsonService } from '../../services/clips-dbjson.service';
import { Clip } from '../../models/clip';

@Component({
  selector: 'app-add-clip',
  templateUrl: './add-clip.component.html',
  styleUrls: ['./add-clip.component.scss'],
})
export class AddClipComponent implements OnInit {
  public singer: string = '';
  public song: string = '';
  public image: string = '';
  public video: string = '';

  constructor(
    private clipDbjsonService: ClipsDbjsonService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public onSubmit(): void {
    if (this.singer && this.song && this.video) {
      const newClip: Clip = {
        singer: this.singer,
        song: this.song,
        image: this.image,
        video: `http://www.youtube.com/embed/${this.video}?autoplay=1&mute=0&controls=0`,
        id: Math.floor(Math.random() * 9999),
      };
      this.clipDbjsonService
        .addClip(newClip)
        .subscribe((clip) =>
          this.router.navigate(['/personalcabinet/myplaylist'])
        );
    }
  }
}
