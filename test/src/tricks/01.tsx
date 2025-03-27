type MaleProps = {
  gender: "male";
  salary: number;
};

type FemaleProps = {
  gender: "female";
  weight: number;
};

type UserProp = {
  name: string;
} & (MaleProps | FemaleProps);

const Child = (prop: UserProp) => {
  if (prop.gender === "male") {
    console.log(prop.salary);
  }

  if (prop.gender === "female") {
    console.log(prop.weight);
  }

  return <div>child</div>;
};

const Parent = () => {
  return <Child name="pritam" gender="female" weight={50} />;
};
