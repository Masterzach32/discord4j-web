/** Declaration file generated by dts-gen */

export = buttercms

declare class buttercms {
  constructor(apiToken: string)

  public static prototype: {}

  public post: post
}

declare interface post {
  list(props: { page: number; page_size: number }): Promise<any>
}
