import ForgetPassword from "./ForgetPassword";
import { render,screen } from "@testing-library/react";
describe('ForgetPass',()=> {
    test('renders a forget page', () => {
    render(<ForgetPassword />)
       const linkedElement = screen.getByText('Submit', {exact: false});
       expect(linkedElement).toBeInTheDocument();

    })

    test('renders forget page if requests succeeds', async()=>{
        window.fetch= jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async()=>[{ email: 'abcd@gmail.com'}]
        })
        render(<ForgetPassword/>)
    })

    test('renders email input if requests succeeds', async()=>{
        window.fetch= jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async()=>[{ email: 'abcd@gmail.com'}]
        })
        render(<ForgetPassword/>)
        const labelElement = screen.getByLabelText('Email',{selector: 'input'});
        expect(labelElement).toBeInTheDocument();
    })

    test('renders button if requests succeeds', async()=>{
        window.fetch= jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async()=>[{ email: 'abcd@gmail.com'}]
        })
        render(<ForgetPassword/>)
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    })
})