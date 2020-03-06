/*
 * Copyright 2019 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Observable } from 'rxjs/internal/Observable';
import { Address } from '../model/account/Address';
import { AccountRestriction } from '../model/restriction/AccountRestriction';
import { AccountRestrictions } from '../model/restriction/AccountRestrictions';

export interface RestrictionAccountRepository {
    /**
     * Gets Account restrictions.
     * @param address list of addresses
     * @returns Observable<AccountRestrictionsInfo>
     */
    getAccountRestrictions(address: Address): Observable<AccountRestriction[]>;

    /**
     * Gets Account restrictions.
     * @param addresses list of addresses
     * @returns Observable<AccountRestrictionsInfo[]>
     */
    getAccountRestrictionsFromAccounts(addresses: Address[]): Observable<AccountRestrictions[]>;
}