export type ActionResult<T> =
  | {
      data: T;
      error?: never;
      fieldErrors?: never;
    }
  | {
      error: string;
      fieldErrors?: Record<string, string[] | undefined>;
      data?: never;
    };
