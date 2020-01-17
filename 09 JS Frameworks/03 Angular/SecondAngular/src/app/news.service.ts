import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor() {}

  getNews() {
    return [
      { id: "1", name: "testNews" },
      { id: "2", name: "Second test news" }
    ];
  }
}
