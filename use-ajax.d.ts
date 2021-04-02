declare module "@mhsteffensen/use-ajax";

type AjaxFunction = () => Promise<any>

type Options = { timeout?: number, runOnce?: boolean }

type Returns = { data: any, error: any, loading: boolean }

declare function useAJAX(ajaxFunction: AjaxFunction, args: Array<any>, options: Options): Returns
