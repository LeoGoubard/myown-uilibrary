import { Highlight, themes } from "prism-react-renderer"


const codeBlock = `
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
`

const Code = () => {
    return (
      <Highlight
        theme={themes.dracula}
        code={codeBlock}
        language="tsx"
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span>{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
}

export default Code