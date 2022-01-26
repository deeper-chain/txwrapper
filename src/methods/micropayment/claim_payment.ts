import {
    Args,
    BaseTxInfo,
    defineMethod,
    OptionsWithMeta,
    UnsignedTransaction,
} from '@substrate/txwrapper-core';


export interface ClaimPaymentArgs extends Args {
    client: string;
    sessionId: number;
    amount: number;
    signature: number;
}

// Define the method
export function claimPayment(
    args: ClaimPaymentArgs,
    info: BaseTxInfo,
    options: OptionsWithMeta
): UnsignedTransaction {
    return defineMethod(
        {
            method: {
                args,
                name: 'claimPayment',
                pallet: 'micropayment',
            },
            ...info,
        },
        options
    );
}