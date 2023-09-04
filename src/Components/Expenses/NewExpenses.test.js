import {render, screen } from "@testing-library/react";
import NewExpenses from "./NewExpenses";
import userEvent from "@testing-library/user-event";

describe('NewExpense', () => {
    test('renders Add New Expense',() => {

       render(<NewExpenses />)
       const buttonElement = screen.getByRole('button');
       userEvent.click(buttonElement);
       const outputElement = screen.getByText('Add New Expense', {exact: false});
       expect(outputElement).toBeInTheDocument();
})

    test('does not render Add New Expense',() => {
        render(<NewExpenses />)
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        const outputElement= screen.queryByText('Add News Expense');
        expect(outputElement).toBeNull();
    })
})