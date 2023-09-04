import ExpenseForm from "./ExpenseForm";
import { render,screen } from "@testing-library/react";
describe('Expense Form Component',()=> {
        test('renders expense category input', () => {
        render(<ExpenseForm/>)
        const linkElement = screen.getByText('Expense Category');
        expect(linkElement).toBeInTheDocument();

        })
        test('renders expense description input', () => {
            render(<ExpenseForm/>)
            const linkElement = screen.getByText('Expense Description');
            expect(linkElement).toBeInTheDocument();
        
            })
        
        test('renders expense amount input', () => {
            render(<ExpenseForm/>)
                const linkElement = screen.getByText('Expense Amount');
                expect(linkElement).toBeInTheDocument();
            
            })
        test('renders expense amount input', () => {
            render(<ExpenseForm/>)
                    const buttonELement = screen.getByRole('button',{name:'Cancel'});
                    expect(buttonELement).toBeInTheDocument();
                
            })
        test('renders expense amount input', () => {
            render(<ExpenseForm/>)
                    const buttonELement = screen.getByRole('button',{name:'Add Expense'});
                    expect(buttonELement).toBeInTheDocument();
                        
                })
})