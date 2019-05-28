export interface IData {
  hits: {
    hits: [
      {
        _source: {
          cpsid: string;
          date: string;
          firstPublished: string;
          headline: string;
          l1: string;
          sectionName: string;
          sectionUri: string;
          siteName: string;
          type: string;
          views: number;
        }
      }
    ],
  }
}