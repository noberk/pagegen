import { DragComponentItemType } from '../constants'

export const unitDefaultStyle: Record<
  DragComponentItemType,
  React.CSSProperties
> = {
  [DragComponentItemType.Box]: {
    width: 100,
    height: 100,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  [DragComponentItemType.Emoji]: {},
  [DragComponentItemType.Any]: {},
  [DragComponentItemType.Input]: {},
  [DragComponentItemType.Button]: {},
  [DragComponentItemType.Circle]: {},
}
