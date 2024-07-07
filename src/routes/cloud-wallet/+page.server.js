//import NeucronSdk from 'neucron-sdk'

/** @type {import('./$types').Actions} */
export const actions = {

    login: async ({ request }) => {
        const data = await request.formData()

        /*
        const neucron = new NeucronSdk()
        const authModule = neucron.authentication

        const loginResponse = await authModule.login({ email: data.get('email'), password: data.get('password') })

        const walletModule = neucron.wallet

        const walletBalance = await walletModule.getWalletBalance({})

        console.log(walletBalance.data.balance.summary)

        */
        return ({
            success: true,
            balance: 10//walletBalance.data.balance.summary
        })

    },

    pay: async ({ request }) => {

        const data = await request.formData()
        /*
        const neucron = new NeucronSdk()
        const authModule = neucron.authentication
        const loginResponse = await authModule.login({ email: data.get('email'), password: data.get('password') })

        console.log(loginResponse)


        const options = {
            address: data.get('paymail'),
            note: 'Nemo 3d',
            amount: data.get('amount')
        }

        console.log(options)
        const payResponse = await neucron.pay.txSpend(options)
        console.log(payResponse)
        */
        return ({
            success: true,
            payment: true
        })
    }

}