import { Component, OnInit, Output } from '@angular/core';
import { Clip } from '../../models/clip';
import { ClipsDbjsonService } from '../../services/clips-dbjson.service';

@Component({
  selector: 'app-hot-clips',
  templateUrl: './hot-clips.component.html',
  styleUrls: ['./hot-clips.component.scss']
})
export class HotClipsComponent implements OnInit {

  public clips: Clip[] = [];

  constructor(private clipsDbjsonService: ClipsDbjsonService) {}

  ngOnInit(): void {
    this.clipsDbjsonService
      .getHotClips()
      .subscribe((clips) => (this.clips = clips));
  }

  public delete(clipId: number): void {
    const result: boolean = confirm('Want to delete?');
    if (result) {
      this.clipsDbjsonService.removeClip(clipId).subscribe((_) => {
        this.clips = this.clips.filter((eachClip) => eachClip.id !== clipId);
      });
    }
  }
}

