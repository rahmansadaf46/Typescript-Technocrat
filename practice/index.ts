{
  //Task 1: Basic Data Types and First Program
  const message: string =
    "Hello World, I will complete this course successfully and become a Next level Web Developer!";
  console.log(message);

  //Task 2: Functions, Optional, and Literal Types
  type UserInfo = {
    name: string;
    age: number;
    role?: "admin" | "user" | "guest";
  };

  const showUserInfo = (user: UserInfo) => {
    if (user.role) {
      console.log(`Name: ${user.name}, Age: ${user.age}, Role: ${user.role}`);
    } else {
      console.log(`Name: ${user.name}, Age: ${user.age}`);
    }
  };

  const user1: UserInfo = {
    name: "John",
    age: 30,
    role: "admin",
  };

  showUserInfo(user1);

  //Task 3: Object Types, Type Alias, & Literal Types
  type Person = {
    Name: string;
    Address: string;
    "Hair and Eye Color": string;
    "Income and Expense": string;
    Hobbies: string[];
    "Family Members": string[];
    Job: string;
    Skills: string[];
    "Marital Status": "single" | "married" | "divorced";
    Friends: string[];
  };

  const person1: Person = {
    Name: "John Doe",
    Address: "123 Main St, Cityville, Country",
    "Hair and Eye Color": "Brown Hair, Blue Eyes",
    "Income and Expense": "Income: $5000/month, Expenses: $2000/month",
    Hobbies: ["Reading", "Traveling", "Cooking"],
    "Family Members": ["Jane Doe", "Jack Doe"],
    Job: "Software Engineer",
    Skills: ["JavaScript", "TypeScript", "React"],
    "Marital Status": "single",
    Friends: ["Alice", "Bob", "Charlie"],
  };

  console.log(person1);

  //Task 4: Union and Intersection Types
  interface Book {
    title: string;
    author: string;
    pageCount: number;
  }

  interface Magazine {
    title: string;
    issue: number;
    publisher: string;
  }

  interface Library {
    name: string;
    location: string;
    publication: Book | Magazine;
  }

  const library1: Library = {
    name: "Bangla Bazar",
    location: "Puran Dhaka",
    publication: {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      pageCount: 180,
    },
  };

  const library2: Library = {
    name: "Puran Bazar",
    location: "New Dhaka",
    publication: {
      title: "National Geographic",
      issue: 202,
      publisher: "National Geographic Society",
    },
  };

  interface LibraryShopHybrid {
    name: string;
    location: string;
    publication: Book & Magazine;
  }

  const libraryShopHybrid: LibraryShopHybrid = {
    name: "Puran Bazar",
    location: "New Dhaka",
    publication: {
      title: "Scientific American Special",
      author: "Various Authors",
      pageCount: 96,
      issue: 50,
      publisher: "Scientific American",
    },
  };

  //Task 5: Function Type

  const reverseString = (string: string): string => {
    return string.split("").reverse().join("");
  };

  const reverseString2 = (string: string): string => {
    let reverseString: string = "";
    for (let i = string.length - 1; i >= 0; i--) {
      reverseString += string[i];
    }
    return reverseString;
  };

  console.log(reverseString2("hello"));

  //Task 6: Spread and Rest Operators, Destructuring
  type MakeSum = (...num: number[]) => number;
  const makeSum: MakeSum = (...num) => {
    let sum = 0;
    num.forEach((value: number) => {
      sum += value;
    });
    return sum;
  };

  const makeSum2 = (...num: number[]): number => {
    let sum = 0;
    num.forEach((value: number) => {
      sum += value;
    });
    return sum;
  };

  console.log(makeSum(1, 4, 1), makeSum2(2, 3));

  //Task 7: Type Assertion and Narrowing
  type StringNumberCheck = (
    value: string | number
  ) => string | number | undefined;
  const stringNumberCheck: StringNumberCheck = (value) => {
    if (typeof value === "string") {
      return `The ${value} length is ${value.length}`;
    }
    if (typeof value === "number") {
      return value * value;
    }
  };
  console.log(stringNumberCheck("Hello"));
  console.log(stringNumberCheck(5));

  //Task 8: Intersection Types
  type User = {
    name: string;
    email: string;
  };

  type Admin = {
    adminLevel: string;
  };

  type AdminUser = User & Admin;
  const describeAdmin = (user: AdminUser): string => {
    return `Admin Name is ${user.name} and his level is ${user.adminLevel}`;
  };
  console.log(
    describeAdmin({
      name: "Sadaf",
      email: "rahmansadaf46@gmail.com",
      adminLevel: "SuperAdmin",
    })
  );

  //Task 9: Optional Chaining
  type Employee = {
    name: string;
    contact: {
      address: {
        city: string;
        state: string;
        country: string;
      };
      phone: string;
    };
    department: string;
  };

  const employee: Employee = {
    name: "Arjun Das",
    contact: {
      address: {
        city: "Kolkata",
        state: "West Bengal",
        country: "India",
      },
      phone: "123-456-7890",
    },
    department: "Engineering",
  };

  const getEmployeeCity = (employee: Employee): string => {
    return `Employee city is ${employee?.contact?.address?.city}`;
  };

  console.log(getEmployeeCity(employee));

  //Task 10: Nullish Coalescing

  const getDisplayName = (name: string | null | undefined): string => {
    return name ?? "Anonymous";
  };

  console.log(getDisplayName("Sadaf"));

  //Task 11: Unknown Type
  const processData = (data: unknown): string | number | undefined => {
    if (typeof data === "string") {
      return data.toLocaleUpperCase();
    } else if (typeof data === "number") {
      return data * data;
    }
  };

  console.log(processData(6));

  //Task 12: Never Type
  const handleError = (message: string): never => {
    throw new Error(message);
  };

  //   handleError('Wasted')

  //Task 13: Generics with Functions and Interfaces
  const duplicateRemove = <T>(data: T[]): T[] => {
    // const returnArray: T[] = [...new Set(data)];
    // const returnArray = data.filter((item, index) => data.indexOf(item) === index);

    const returnArray2 = data.filter(
      (value, index) => data.indexOf(value) === index
    );
    return returnArray2;
  };

  console.log(duplicateRemove<number>([1, 2, 3, 6, 6]));
  console.log(duplicateRemove<string>(["s", "s", "5", "s"]));

  //Task 14: Asynchronous TypeScript and Type Aliases
  type UserInfo2 = {
    name: string;
    email: string;
  };
  const getUser = async (): Promise<UserInfo2[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: UserInfo2[] = await response.json();
    const returnData: UserInfo2[] = data.map((user: UserInfo2) => {
      return { name: user.name, email: user.email };
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return returnData;
  };

  getUser()
    .then((users: UserInfo2[]) => {
      console.log("Fetched users:", users);
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });

  //Task 15: Type Guards
  const printUpperCase = (value: unknown): void => {
    if (typeof value === "string") {
      console.log(value.toUpperCase());
    }
  };
  const isString = (value: unknown) => {
    if (typeof value === "string") {
      printUpperCase(value);
    }
  };

  isString("This is a string");

  //Task 16: Utility Types and Keyof Constraints

  type UserInfo3 = {
    name: string;
    age: number;
    email: string;
  }

  type UserInfo3Property = keyof UserInfo3; // "name" | "age" | "email"

  const userInfo3: UserInfo3 = {
    name: "Sadaf",
    age: 26,
    email: "rahmansadaf46@gmail.com",
  }

  const getObjectValue=<X, Y extends keyof X>(obj:X, key: Y)=>{
    return obj[key];
  }

  console.log(getObjectValue(userInfo3, 'email'));

  //
}
