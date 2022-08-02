import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ClipsApiService } from '../../services/clips-api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-search-clip',
  templateUrl: './search-clip.component.html',
  styleUrls: ['./search-clip.component.scss'],
})
export class SearchClipComponent implements OnInit {
  public videoUrl: string;
  public videoId: string;

  @ViewChild('searchText') public searchText: ElementRef;
  @ViewChild('searchSong') public searchSong: ElementRef;

  public urlSafe: SafeResourceUrl;

  constructor(
    private search: ClipsApiService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.search.findClip('Epam').subscribe((data) => {});
  }

  public searchClip() {
    let searchText =
      this.searchText.nativeElement.value + this.searchSong.nativeElement.value;
    if (searchText != '') {
      this.search.findClip(searchText).subscribe((data) => {
        this.videoId = data.items[0].id.videoId;
        this.videoUrl = `http://www.youtube.com/embed/${data.items[0].id.videoId}?autoplay=1&mute=0&controls=0`;
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.videoUrl
        );
        this.searchText.nativeElement.value = '';
        this.searchSong.nativeElement.value = '';
      });
    }
  }
}
