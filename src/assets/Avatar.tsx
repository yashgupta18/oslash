import React from 'react'

export const Avatar = (): JSX.Element => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="12" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1066_418" transform="scale(0.00390625)" />
        </pattern>
        <image
          id="image0_1066_418"
          width="256"
          height="256"
          xlinkHref="data:image/jpeg;base64,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"
        />
      </defs>
    </svg>
  )
}