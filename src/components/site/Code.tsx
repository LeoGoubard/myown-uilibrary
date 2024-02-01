import { Highlight, themes } from "prism-react-renderer"




const Code = ({ codeBlock } : { codeBlock: string; }) => {
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