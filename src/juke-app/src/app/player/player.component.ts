import { Component, OnInit, OnDestroy } from '@angular/core';
import { StreamState } from '../_interfaces/stream-state';
import { AudioService } from '../_services/audio.service';
import { CloudService } from '../_services/cloud.service';
import { Song } from '../_interfaces/song';
import { Subject, PartialObserver, Observer } from 'rxjs';

const incoming = [{
  url:
    // tslint:disable-next-line: max-line-length
    'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',
  songName: 'Perfect',
  artist: ' Ed Sheeran'
},
{
  url:
    // tslint:disable-next-line: max-line-length
    'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
  songName: 'Man Atkeya Beparwah',
  artist: 'Nusrat Fateh Ali Khan'
},
{
  url:
    'https://ia801503.us.archive.org/15/items/TheBeatlesPennyLane_201805/The%20Beatles%20-%20Penny%20Lane.mp3',
  songName: 'Penny Lane',
  artist: 'The Beatles'
}];


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  files: any[] = [];
  state: StreamState;
  currentFile: any = {};
  constructor(
    public audioService: AudioService,
    public cloudService: CloudService
  ) {
    cloudService.postSongs(incoming);

    cloudService.getFiles().subscribe(files => {
      this.files.push(files);
    });

    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
   }

  ngOnInit() {
    console.log(this.cloudService.queue.next());
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {

    });
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  openFile(file, index) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1 ;
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }

}
