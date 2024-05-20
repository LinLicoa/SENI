import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent implements AfterViewInit {
  currentSlideIndex = 1;

  ngAfterViewInit() {
    this.showSlides(this.currentSlideIndex);
  }

  currentSlide(n: number) {
    this.showSlides(this.currentSlideIndex = n);
  }

  showSlides(n: number) {
    const slides = document.getElementsByClassName("slide") as HTMLCollectionOf<HTMLElement>;
    const navButtons = document.getElementsByClassName("nav-button") as HTMLCollectionOf<HTMLElement>;

    if (n > slides.length) { this.currentSlideIndex = 1; }
    if (n < 1) { this.currentSlideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transform = `translateX(-${(this.currentSlideIndex - 1) * 100}%)`;
    }

    for (let i = 0; i < navButtons.length; i++) {
      navButtons[i].className = navButtons[i].className.replace(" active", "");
    }

    navButtons[this.currentSlideIndex - 1].className += " active";
  }
}
