import { InvokeConfig, InnerClient } from "./core.js";
import * as types from "./types.js";

export interface ItemsApi {
  get(vaultId: string, itemId: string): Promise<types.Item>;
}

export class ItemsSource implements ItemsApi {
  #inner: InnerClient;

  public constructor(inner: InnerClient) {
    this.#inner = inner;
  }

  public async get(vaultId: string, itemId: string): Promise<types.Item> {
    const invocationConfig: InvokeConfig = {
      clientId: this.#inner.id,
      invocation: {
        name: "Get",
        parameters: {
          vault_id: vaultId,
          item_id: itemId,
        },
      },
    };
    return JSON.parse(
      await this.#inner.core.invoke(invocationConfig),
    ) as Promise<types.Item>;
  }
}