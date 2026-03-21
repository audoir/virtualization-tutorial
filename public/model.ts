// Variable height demo components

export type Item =
  | { type: "state"; state: string }
  | { type: "zip"; city: string; zip: string };

// Grid demo components
export type Contact = {
  job_title: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  timezone: string;
};
