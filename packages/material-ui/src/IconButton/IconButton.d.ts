import * as React from 'react';
import { SxProps } from '@material-ui/system';
import { OverridableStringUnion } from '@material-ui/types';
import { Theme } from '..';
import { ExtendButtonBase, ExtendButtonBaseTypeMap } from '../ButtonBase';
import { OverrideProps } from '../OverridableComponent';

export interface IconButtonPropsColorOverrides {}

export interface IconButtonPropsSizeOverrides {}

export type IconButtonTypeMap<
  P = {},
  D extends React.ElementType = 'button'
> = ExtendButtonBaseTypeMap<{
  props: P & {
    /**
     * The icon to display.
     */
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: {
      /** Styles applied to the root element. */
      root?: string;
      /** Styles applied to the root element if `edge="start"`. */
      edgeStart?: string;
      /** Styles applied to the root element if `edge="end"`. */
      edgeEnd?: string;
      /** Styles applied to the root element if `color="inherit"`. */
      colorInherit?: string;
      /** Styles applied to the root element if `color="primary"`. */
      colorPrimary?: string;
      /** Styles applied to the root element if `color="secondary"`. */
      colorSecondary?: string;
      /** Pseudo-class applied to the root element if `disabled={true}`. */
      disabled?: string;
      /** Styles applied to the root element if `size="small"`. */
      sizeSmall?: string;
      /** Styles applied to the children container element. */
      label?: string;
    };
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'default'
     */
    color?: OverridableStringUnion<
      'inherit' | 'primary' | 'secondary',
      IconButtonPropsColorOverrides
    >;
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, the  keyboard focus ripple is disabled.
     * @default false
     */
    disableFocusRipple?: boolean;
    /**
     * If given, uses a negative margin to counteract the padding on one
     * side (this is often helpful for aligning the left or right
     * side of the icon with content above or below, without ruining the border
     * size and shape).
     * @default false
     */
    edge?: 'start' | 'end' | false;
    /**
     * The size of the component.
     * `small` is equivalent to the dense button styling.
     * @default 'medium'
     */
    size?: OverridableStringUnion<'small' | 'medium', IconButtonPropsSizeOverrides>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  defaultComponent: D;
}>;

/**
 * Refer to the [Icons](https://material-ui.com/components/icons/) section of the documentation
 * regarding the available icon options.
 *
 * Demos:
 *
 * - [Buttons](https://material-ui.com/components/buttons/)
 *
 * API:
 *
 * - [IconButton API](https://material-ui.com/api/icon-button/)
 * - inherits [ButtonBase API](https://material-ui.com/api/button-base/)
 */
declare const IconButton: ExtendButtonBase<IconButtonTypeMap>;

export type IconButtonClassKey = keyof NonNullable<IconButtonTypeMap['props']['classes']>;

export type IconButtonProps<
  D extends React.ElementType = IconButtonTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<IconButtonTypeMap<P, D>, D>;

export default IconButton;
