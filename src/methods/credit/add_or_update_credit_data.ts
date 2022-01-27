import {
    Args,
    BaseTxInfo,
    defineMethod,
    OptionsWithMeta,
    UnsignedTransaction,
} from '@substrate/txwrapper-core';

enum CreditLevel {
    Zero = 'zero',
    One = 'One',
    Two = 'Two',
    Three = 'Three',
    Four = 'Four',
    Five = 'Five',
    Six = 'Six',
    Seven = 'Seven',
    Eight = 'Eight',
}

type CreditData = {
    campaign_id: number;
    credit: number;
    initial_credit_level: CreditLevel;
    rank_in_initial_credit_level: number;
    number_of_referees: number;
    current_credit_level: CreditLevel;
    reward_eras: number;
}

export interface AddOrUpdateCreditDataArgs extends Args {
    /**
     * account to receive credit data.
     */
    account_id: string;
    /**
     * credit data to set to this account.
     */
    credit_data: CreditData
}

// Define the method
export function addOrUpdateCreditData(
    args: AddOrUpdateCreditDataArgs,
    info: BaseTxInfo,
    options: OptionsWithMeta
): UnsignedTransaction {
    return defineMethod(
        {
            method: {
                args,
                name: 'addOrUpdateCreditData',
                pallet: 'credit',
            },
            ...info,
        },
        options
    );
}