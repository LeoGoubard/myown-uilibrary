import Button from '../components/library/Button'
import Section from '../components/site/Section'
import Container from '../components/site/Container'

const ButtonPage = () => {
  return (
    <Container
        title="Button"
        description="A button is a widget that enables users to trigger an action or event"
      >

        {/* Section */}
        <Section
          id="button-primary"
          title="Primary"
          description="Primary actions should be obvious. Solid, high contast background colors work great here."
          codeBlock={`
          <>
            <Button>
              Default
            </Button>
            <Button disabled>
              Disabled
            </Button>
            <Button
              colors={{
                bg: 'bg-amber-500',
                focusRing: 'focus:ring-amber-500',
                hoverBg: 'hover:bg-amber-600'
              }}
            >
              Amber
            </Button>
            <Button
              colors={{
                bg: 'bg-rose-500',
                focusRing: 'focus:ring-rose-500',
                hoverBg: 'hover:bg-rose-600'
              }}
            >
              Rose
            </Button>
            <Button
              colors={{
                bg: 'bg-fuchsia-500',
                focusRing: 'focus:ring-fuchsia-500',
                hoverBg: 'hover:bg-fuchsia-600'
              }}
            >
              Fuchsia
            </Button>
            <Button
              colors={{
                bg: 'bg-indigo-500',
                focusRing: 'focus:ring-indigo-500',
                hoverBg: 'hover:bg-indigo-600'
              }}
            >
              Indigo
            </Button>
            <Button
              colors={{
                bg: 'bg-[#1da1f2]',
                focusRing: 'focus:ring-[#1da1f2]',
                hoverBg: 'hover:bg-[#1a8cd8]'
              }}
            >
              Twitter Blue
            </Button>
          </>
          `}
        >

          <Button>Default Primary</Button>
          <Button disabled>Default Primary</Button>
          <Button colors={ { bg: 'bg-amber-500 ', hoverBg: "hover:bg-amber-600", focusRing: "focus:ring-amber-500"}}>Amber</Button>
          <Button colors={ { bg: 'bg-rose-500 ', hoverBg: "hover:bg-rose-600", focusRing: "focus:ring-rose-500"}}>Rose</Button>
          <Button colors={ { bg: 'bg-fuchsia-500 ', hoverBg: "hover:bg-fuchsia-600", focusRing: "focus:ring-fuchsia-500"}}>Fuchsia</Button>
          <Button colors={ { bg: 'bg-indigo-500 ', hoverBg: "hover:bg-indigo-600", focusRing: "focus:ring-indigo-500"}}>Indigo</Button>
          <Button colors={ { bg: 'bg-[#1da1f2] ', hoverBg: "hover:bg-[#1da1f2]", focusRing: "focus:ring-[#1da1f2]"}}>Twitter Blue</Button>
        </Section>

        <Section
          id="button-secondary"
          title="Secondary"
          description="Secondary actions should be obvious. Solid, high contast background colors work great here."
          codeBlock={
            `<>
            <Button variant="secondary">
              Default
            </Button>
            <Button
              variant="secondary"
              disabled
            >
              Disabled
            </Button>
            <Button
              variant="secondary"
              colors={{
                darkHoverBorder: 'dark:hover:border-amber-500',
                focusRing: 'focus:ring-amber-500',
                hoverBg: 'hover:bg-amber-500',
                hoverBorder: 'hover:border-amber-500',
                text: 'text-amber-500'
              }}
            >
              Amber
            </Button>
            <Button
              variant="secondary"
              colors={{
                darkHoverBorder: 'dark:hover:border-rose-500',
                focusRing: 'focus:ring-rose-500',
                hoverBg: 'hover:bg-rose-500',
                hoverBorder: 'hover:border-rose-500',
                text: 'text-rose-500'
              }}
            >
              Rose
            </Button>
            <Button
              variant="secondary"
              colors={{
                darkHoverBorder: 'dark:hover:border-fuchsia-500',
                focusRing: 'focus:ring-fuchsia-500',
                hoverBg: 'hover:bg-fuchsia-500',
                hoverBorder: 'hover:border-fuchsia-500',
                text: 'text-fuchsia-500'
              }}
            >
              Fuchsia
            </Button>
            <Button
              variant="secondary"
              colors={{
                darkHoverBorder: 'dark:hover:border-indigo-500',
                focusRing: 'focus:ring-indigo-500',
                hoverBg: 'hover:bg-indigo-500',
                hoverBorder: 'hover:border-indigo-500',
                text: 'text-indigo-500'
              }}
            >
              Indigo
            </Button>
            <Button
              variant="secondary"
              colors={{
                darkHoverBorder: 'dark:hover:border-[#1da1f2]',
                focusRing: 'focus:ring-[#1da1f2]',
                hoverBg: 'hover:bg-[#1da1f2]',
                hoverBorder: 'hover:border-[#1da1f2]',
                text: 'text-[#1da1f2]'
              }}
            >
              Twitter Blue
            </Button>
          </>`
          }
        >

          <Button variant="secondary">Default Secondary</Button>
          <Button variant="secondary" disabled>Disabled Secondary</Button>

          <Button variant="secondary" colors={ { text: 'text-amber-500 ', hoverBorder: "hover:border-amber-500", hoverBg: "hover:bg-amber-500", focusRing: "focus:ring-amber-500", darkHoverBorder: "dark:hover:border-amber-500"}}>Amber</Button>

          <Button variant="secondary" colors={ { text: 'text-rose-500 ', hoverBorder: "hover:border-rose-500", hoverBg: "hover:bg-rose-500", focusRing: "focus:ring-rose-500", darkHoverBorder: "dark:hover:border-rose-500"}}>Rose</Button>

          <Button variant="secondary" colors={ { text: 'text-fuchsia-500 ', hoverBorder: "hover:border-fuchsia-500", hoverBg: "hover:bg-fuchsia-500", focusRing: "focus:ring-fuchsia-500", darkHoverBorder: "dark:hover:border-fuchsia-500"}}>Fuchsia</Button>

          <Button variant="secondary" colors={ { text: 'text-indigo-500 ', hoverBorder: "hover:border-indigo-500", hoverBg: "hover:bg-indigo-500", focusRing: "focus:ring-indigo-500", darkHoverBorder: "dark:hover:border-indigo-500"}}>Indigo</Button>

          <Button variant="secondary" colors={ { text: 'text-[#1da1f2] ', hoverBorder: "hover:border-[#1da1f2]", hoverBg: "hover:bg-[#1da1f2]", focusRing: "focus:ring-[#1da1f2]", darkHoverBorder: "dark:hover:border-[#1da1f2]"}}>Twitter Blue</Button>


        </Section>

        <Section
          id="button-tertiary"
          title="Tertiary"
          description="Tertiary actions should be obvious. Solid, high contast background colors work great here."
          codeBlock={`
                    <>
            <Button variant="tertiary">
              Default
            </Button>
            <Button
              variant="tertiary"
              disabled
            >
              Disabled
            </Button>
            <Button
              variant="tertiary"
              colors={{
                darkHoverText: 'dark:hover:text-amber-400',
                focusRing: 'focus:ring-amber-500',
                hoverText: 'hover:text-amber-700',
                text: 'text-amber-500'
              }}
            >
              Amber
            </Button>
            <Button
              variant="tertiary"
              colors={{
                darkHoverText: 'dark:hover:text-rose-400',
                focusRing: 'focus:ring-rose-500',
                hoverText: 'hover:text-rose-700',
                text: 'text-rose-500'
              }}
            >
              Rose
            </Button>
            <Button
              variant="tertiary"
              colors={{
                darkHoverText: 'dark:hover:text-fuchsia-400',
                focusRing: 'focus:ring-fuchsia-500',
                hoverText: 'hover:text-fuchsia-700',
                text: 'text-fuchsia-500'
              }}
            >
              Fuchsia
            </Button>
            <Button
              variant="tertiary"
              colors={{
                darkHoverText: 'dark:hover:text-indigo-400',
                focusRing: 'focus:ring-indigo-500',
                hoverText: 'hover:text-indigo-700',
                text: 'text-indigo-500'
              }}
            >
              Indigo
            </Button>
            <Button
              variant="tertiary"
              colors={{
                darkHoverText: 'dark:hover:text-[#71c9f8]',
                focusRing: 'focus:ring-[#1da1f2]',
                hoverText: 'hover:text-[#1a8cd8]',
                text: 'text-[#1da1f2]'
              }}
            >
              Twitter Blue
            </Button>
          </>`}
        >

          <Button variant="tertiary">Default Tertiary</Button>
          <Button variant="tertiary" disabled>Default Tertiary</Button>

          <Button variant="tertiary" colors={ { text: 'text-amber-500 ', hoverText: "hover:text-amber-700", focusRing: "focus:ring-amber-500", darkHoverText: "dark:hover:text-amber-400" }}>Amber</Button>

          <Button variant="tertiary" colors={ { text: 'text-rose-500 ', hoverText: "hover:text-rose-700", focusRing: "focus:ring-rose-500", darkHoverText: "dark:hover:text-rose-400" }}>Rose</Button>

          <Button variant="tertiary" colors={ { text: 'text-indigo-500 ', hoverText: "hover:text-indigo-700", focusRing: "focus:ring-indigo-500", darkHoverText: "dark:hover:text-indigo-400" }}>Fuchsia</Button>

          <Button variant="tertiary" colors={ { text: 'text-fuchsia-500 ', hoverText: "hover:text-fuchsia-700", focusRing: "focus:ring-fuchsia-500", darkHoverText: "dark:hover:text-fuchsia-400" }}>Indigo</Button>

          <Button variant="tertiary" colors={ { text: 'text-[#1da1f2] ', hoverText: "hover:text-[#1da1f2]", focusRing: "focus:ring-[#1da1f2]", darkHoverText: "dark:hover:text-[#1da1f2]" }}>Twitter Blue</Button>

        </Section>

        <Section
          id="button-destructive"
          title="Destructive"
          description="Destructive actions should be obvious. Solid, high contast background colors work great here."
          codeBlock={`
                    <>
            <Button
              colors={{
                bg: 'bg-red-500',
                focusRing: 'focus:ring-red-500',
                hoverBg: 'hover:bg-red-600'
              }}
            >
              Yes, I'm sure I want to delete this.
            </Button>
            <Button
              variant="secondary"
              colors={{
                darkHoverBorder: 'dark:hover:border-red-500',
                focusRing: 'focus:ring-red-500',
                hoverBg: 'hover:bg-red-500',
                hoverBorder: 'hover:border-red-500',
                text: 'text-red-500'
              }}
            >
              Unsubscribe
            </Button>
            <Button
              variant="tertiary"
              colors={{
                darkHoverText: 'dark:hover:text-zinc-400',
                focusRing: 'focus:ring-gray-500',
                hoverText: 'hover:text-gray-700',
                text: 'text-gray-500'
              }}
            >
              Cancel
            </Button>
          </>
          `}
        >

          <Button colors={ { bg: 'bg-red-500 ', hoverBg: "hover:bg-red-600", focusRing: "focus:ring-red-500"}}>Yes, I'm sure I want to delete this.</Button>

          <Button variant="secondary"colors={ { text: 'text-red-500 ', hoverBg: "hover:bg-red-500", hoverBorder: "hover:border-red-500", focusRing: "focus:ring-red-500", darkHoverBorder: "dark:hover:border-red-500"}}>Yes, I'm sure I want to delete this.</Button>

          <Button variant="tertiary" colors={ { text: 'text-gray-500 ', hoverText: "hover:text-gray-700", focusRing: "focus:ring-gray-500", darkHoverText: "dark:hover:text-zinc-400"}}>Unsubscribe</Button>


        </Section>
        
      </Container>
  )
}

export default ButtonPage