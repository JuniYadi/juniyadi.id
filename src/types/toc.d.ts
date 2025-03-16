export interface TOCItem {
  depth: number;
  value: string;
  data?: {
    hProperties?: {
      id: string;
    };
    id?: string;
  };
}

export interface TableOfContentProps {
  items: {
    tocs: TOCItem[];
  };
}
