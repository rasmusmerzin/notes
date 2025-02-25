export interface Note {
  id: string;
  user: string;
  email?: string;
  title: string;
  content: string;
  public: boolean;
}
