export class Widget {
  _id: String;
  widgetType: String;
  pageId: String;
  size: Number;
  width: String;
  text: String;
  url: String;

  constructor(_id, widgetType, pageId, size = null, width = null, text = null,  url = null) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.size = size;
    this.width = width;
    this.text = text;
  }
}
