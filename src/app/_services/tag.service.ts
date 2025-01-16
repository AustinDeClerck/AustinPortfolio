import { Injectable } from '@angular/core';
import { Tag } from '../_models/tag';
import { Category } from '../_models/category';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  
  constructor() { }

  GetTags() {
    return Tag.GetTags();
  }

  GetCategories() {
    return Object.keys(Category).filter(x => isNaN(Number(x)));
  }

  GetTagsByCategory(category: string | Category) {
    let categoryTags: Tag[] = [];
    let tags = this.GetTags();

    tags.forEach((tag) => {
      if( tag.category === category) {
        categoryTags.push(tag);
      }
    });

    if (categoryTags === undefined || category === undefined) {
      throw new TypeError('There is no tag that matches the category:' + category);
    }

    return categoryTags;
  }
}
