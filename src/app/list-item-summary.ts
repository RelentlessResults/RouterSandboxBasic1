export class ListItemSummary {
  id: number;
  label: string;
  imageUrl:string;

  constructor(id: number, label: string, imageUrl:string) {
    this.id = id;
    this.label = label;
    this.imageUrl = imageUrl;
  }

}
