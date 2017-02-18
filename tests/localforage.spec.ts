import { OpaqueToken } from '@angular/core';

import { LocalForageToken, localforageFactory } from '../src/localforage';

describe('Module: LocalForage', () => {
  it('should create a token', () => {
    const token: any = LocalForageToken();
    expect(token instanceof OpaqueToken).toBe(true);
    expect(token._desc).toBe('localforage');
  });

  it('should create a provider', () => {
    const provider: any = localforageFactory();
    expect(provider.localforageFactory.name).toBe('localforageFactory');
  });
});
