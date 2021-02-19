import{ Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(){

    }
  }
  $(document).ready(function () {
    var imageFile = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
    var currentIndex = 0;
    setInterval(function () {
        if (currentIndex == imageFile.length) {
            currentIndex = 0;
        }
        $(".bodysty").fadeOut(3).css('background-image', 'url(../assets/images/'
        + imageFile[currentIndex++] + ')').fadeIn(3);
    }, 5000);
  });




