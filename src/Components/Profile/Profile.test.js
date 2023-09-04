import { render, screen } from "@testing-library/react";
import Profile from "./Profile";

describe('Profile', () => {
    test('renders a Profile page', () => {
        render(<Profile />)
        const labelElement = screen.getByLabelText('Full Name',{selector: 'input'});
        expect(labelElement).toBeInTheDocument();
    })

    test('renders a Profile page', () => {
        render(<Profile />)
        const labelElement = screen.getByLabelText('Photo URL',{selector: 'input'});
        expect(labelElement).toBeInTheDocument();
    })
    test('renders profilepage if request succeeds', async()=>{
        window.fetch= jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async()=>[{ idToken: '123',
                displayName:'firstuser'}]
        })
        render(<Profile/>)
    })

    test('renders profilepage if requests succeeds', async()=>{
        window.fetch= jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async()=>[{ idToken: '123',
            photoUrl:'firstuser.com'}]
        })
        render(<Profile/>)
    })
})