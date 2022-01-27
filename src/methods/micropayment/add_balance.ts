import {
    Args,
    BaseTxInfo,
    defineMethod,
    OptionsWithMeta,
    UnsignedTransaction,
} from '@substrate/txwrapper-core';


export interface AddBalanceArgs extends Args {
    server: string;
    amount: number;
}

// Define the method
export function addBalance(
    args: AddBalanceArgs,
    info: BaseTxInfo,
    options: OptionsWithMeta
): UnsignedTransaction {
    return defineMethod(
        {
            method: {
                args,
                name: 'addBalance',
                pallet: 'micropayment',
            },
            ...info,
        },
        options
    );
}