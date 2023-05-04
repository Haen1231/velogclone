import type { Meta, StoryObj } from '@storybook/react';


import Button, {ButtonProos} from "../components/Button/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ['autodocs'],
  argTypes: {clickHandler: {action: "clicked"}},

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Red:Story = {
  args : {
    label: "Red",
    backgroundColor: "red",
    size: "md",
    color: "white",
  }
};

export const Blue:Story = {
  args : {
    label: "Blue",
    backgroundColor: "blue",
    size: "lg",
    color: "white",
  }
};

export const Login:Story = {
  args : {
    label: "Login",
    backgroundColor: "green",
    size: "lg",
    color: "white",
  }
};
