<script lang="ts">
  import { Button } from "flowbite-svelte";
  import { tv } from "tailwind-variants";
  import type { ComponentProps } from "svelte";
  import type { VariantProps } from "tailwind-variants";

  const classes = tv({
    variants: {
      variant: {
        outlined: `
					bg-[var(--buttonVariantsVariantOutlinedDefault)]
          hover:bg-[var(--buttonVariantsVariantOutlinedHover)]
          focus:bg-[var(--buttonVariantsVariantOutlinedFocus)]
          active:bg-[var(--buttonVariantsVariantOutlinedActive)]
        `,
      },
    },
  });

  interface LocalProps {
    label?: string;
  }

  interface $$Props
    extends ComponentProps<Button>,
      VariantProps<typeof classes>,
      LocalProps {}

  export let label = "";
  export let variant: $$Props["variant"] = "outlined";
</script>

<Button {...$$props} class={classes({ variant })}>{label}</Button>
