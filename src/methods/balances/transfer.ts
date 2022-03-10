import {
    Args,
    BaseTxInfo,
    defineMethod,
    OptionsWithMeta,
    UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface TransferArgs extends Args {
    dest: string;
    value: string;
}

// Define the method
export function transfer(
    args: TransferArgs,
    info: BaseTxInfo,
    options: OptionsWithMeta
): UnsignedTransaction {
    return defineMethod(
        {
            method: {
                args,
                name: 'transfer',
                pallet: 'balances',
            },
            ...info,
        },
        options
    );
}