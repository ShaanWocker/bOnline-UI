import { createStore } from 'vuex';

export default createStore({
  state: {
    user1: {
      account_id: 291123,
      first_name: 'Lynda',
      last_name: 'Monnoyer',
      email_address: 'lmonnoyer0@fema.gov',
      business_name: 'Ares Capital Corporation',
      address_line_one: '89652 Continental Plaza',
      address_line_two: 'Holmberg',
      mobile_number: '07855521456',
      phone_number: '07855521456',
      address_city: 'LONDON',
      address_county: 'GREATER LONDON',
      address_country: 'UNITED KINGDOM',
      address_post_code: 'SW18 5RH',
      account_status: 'Live',
      payment_method: 'MP',
      next_invoice_date: '2022-03-22',
      balance: 30,
      products: [
        {
          product_id: 70005302,
          product_kind: 'VOIP',
          product_detail: '01200400975',
        },
      ],
      authorised_contact: {
        full_name: null,
        email_address: null,
        mobile_number: null,
        phone_number: null,
      },
    },
  },
});
