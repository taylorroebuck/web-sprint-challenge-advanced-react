import React from "react";
import { render, fireEvent, getByLabelText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    getByText(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, findByText, getByRole } = render(<CheckoutForm />);

    fireEvent.change(getByLabelText(/first name/i), { target: { value: 'taylor'} });
    fireEvent.change(getByLabelText(/last name/i), { target: { value: 'roebuck'} });
    fireEvent.change(getByLabelText(/address/i), { target: { value: '123 main st'} });
    fireEvent.change(getByLabelText(/city/i), { target: { value: 'parts unknown'} });
    fireEvent.change(getByLabelText(/state/i), { target: { value: 'az'} });
    fireEvent.change(getByLabelText(/zip/i), { target: { value: '123456'} });

    expect(getByLabelText(/first name/i).value).toBe('taylor');
    expect(getByLabelText(/last name/i).value).toBe('roebuck');
    expect(getByLabelText(/address/i).value).toBe('123 main st');
    expect(getByLabelText(/city/i).value).toBe('parts unknown');
    expect(getByLabelText(/state/i).value).toBe('az');
    expect(getByLabelText(/zip/i).value).toBe('123456');

    fireEvent.click(getByRole('button', /checkout/i));

    findByText('You have ordered some plants! Woo-hoo! taylor roebuck 123 main st parts unknown az 123456');
});
