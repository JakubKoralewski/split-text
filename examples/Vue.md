### Markup:
```HTML
<div ref="findOutMoreButton">
    Dowiedz się więcej
</div>
```
### Vue component:
```typescript
import { SplitText, SplitTextSplit } from "@/plugins/SplitText";

this.findOutMoreButton = this.$refs.findOutMoreButton as HTMLDivElement;
let st = new SplitText({
    words: 1,
    chars: 1,
    spacing: "0.33em"
});
this.findOutMoreButtonSplitText = st.split(this.findOutMoreButton);
```

### Result:
```javascript
console.log(this.findOutMoreButtonSplitText);

{
  "words": [
    {
      "nodeText": {},
      "chars": [
        {
          "nodeText": {},
          "_gsTweenID": "t1",
          "_gsTransform": {
            "perspective": 0,
            "force3D": "auto",
            "svg": false,
            "skewType": "compensated",
            "scaleX": 1,
            "scaleY": 1
          }
        },
        {
          "nodeText": {},
          "_gsTweenID": "t2",
          "_gsTransform": {
            "perspective": 0,
            "force3D": "auto",
            "svg": false,
            "skewType": "compensated",
            "scaleX": 1,
            "scaleY": 1
          }
        },
        {
          "nodeText": {},
          "_gsTweenID": "t3",
          "_gsTransform": {
            "perspective": 0,
            "force3D": "auto",
            "svg": false,
            "skewType": "compensated",
            "scaleX": 1,
            "scaleY": 1
          }
        },
        {
          "nodeText": {},
          "_gsTweenID": "t4",
          "_gsTransform": {
            "perspective": 0,
            "force3D": "auto",
            "svg": false,
            "skewType": "compensated",
            "scaleX": 1,
            "scaleY": 1
          }
        },
        {
          "nodeText": {},
          "_gsTweenID": "t5",
          "_gsTransform": {
            "perspective": 0,
            "force3D": "auto",
            "svg": false,
            "skewType": "compensated",
            "scaleX": 1,
            "scaleY": 1
          }
        },
        {
          "nodeText": {},
          "_gsTweenID": "t6",
          "_gsTransform": {
            "perspective": 0,
            "force3D": "auto",
            "svg": false,
            "skewType": "compensated",
            "scaleX": 1,
            "scaleY": 1
          }
        },
        {
          "nodeText": {},
          "_gsTweenID": "t7",
          "_gsTransform": {
            "perspective": 0,
            "force3D": "auto",
            "svg": false,
            "skewType": "compensated",
            "scaleX": 1,
            "scaleY": 1
          }
        }
      ]
    },
    {
      "nodeText": {},
      "chars": [
        {
          "nodeText": {},
          "_gsTweenID": "t8",
          "_gsTransform": {
            "perspective": 0,
            "force3D": "auto",
            "svg": false,
            "skewType": "compensated",
            "scaleX": 1,
            "scaleY": 1
          }
        },
        {
          "nodeText": {},
          "_gsTweenID": "t9",
          "_gsTransform": {
            "perspective": 0,
            "force3D": "auto",
            "svg": false,
            "skewType": "compensated",
            "scaleX": 1,
            "scaleY": 1
          }
        },
        {
          "nodeText": {},
          "_gsTweenID": "t10",
          "_gsTransform": {
            "perspective": 0,
            "force3D": "auto",
            "svg": false,
            "skewType": "compensated",
            "scaleX": 1,
            "scaleY": 1
          }
        }
      ]
    },
    {
      "nodeText": {},
      "chars": [
        {
          "nodeText": {},
          "_gsTweenID": "t11",
          "_gsTransform": {
            "perspective": 0,
            "force3D": "auto",
            "svg": false,
            "skewType": "compensated",
            "scaleX": 1,
            "scaleY": 1
          }
        },
        {
          "nodeText": {},
          "_gsTweenID": "t12",
          "_gsTransform": {
            "perspective": 0,
            "force3D": "auto",
            "svg": false,
            "skewType": "compensated",
            "scaleX": 1,
            "scaleY": 1
          }
        },
        {
          "nodeText": {},
          "_gsTweenID": "t13",
          "_gsTransform": {
            "perspective": 0,
            "force3D": "auto",
            "svg": false,
            "skewType": "compensated",
            "scaleX": 1,
            "scaleY": 1
          }
        },
        {
          "nodeText": {},
          "_gsTweenID": "t14",
          "_gsTransform": {
            "perspective": 0,
            "force3D": "auto",
            "svg": false,
            "skewType": "compensated",
            "scaleX": 1,
            "scaleY": 1
          }
        },
        {
          "nodeText": {},
          "_gsTweenID": "t15",
          "_gsTransform": {
            "perspective": 0,
            "force3D": "auto",
            "svg": false,
            "skewType": "compensated",
            "scaleX": 1,
            "scaleY": 1
          }
        },
        {
          "nodeText": {},
          "_gsTweenID": "t16",
          "_gsTransform": {
            "perspective": 0,
            "force3D": "auto",
            "svg": false,
            "skewType": "compensated",
            "scaleX": 1,
            "scaleY": 1
          }
        }
      ]
    }
  ],
  "chars": [
    {
      "nodeText": {},
      "_gsTweenID": "t1",
      "_gsTransform": {
        "perspective": 0,
        "force3D": "auto",
        "svg": false,
        "skewType": "compensated",
        "scaleX": 1,
        "scaleY": 1
      }
    },
    {
      "nodeText": {},
      "_gsTweenID": "t2",
      "_gsTransform": {
        "perspective": 0,
        "force3D": "auto",
        "svg": false,
        "skewType": "compensated",
        "scaleX": 1,
        "scaleY": 1
      }
    },
    {
      "nodeText": {},
      "_gsTweenID": "t3",
      "_gsTransform": {
        "perspective": 0,
        "force3D": "auto",
        "svg": false,
        "skewType": "compensated",
        "scaleX": 1,
        "scaleY": 1
      }
    },
    {
      "nodeText": {},
      "_gsTweenID": "t4",
      "_gsTransform": {
        "perspective": 0,
        "force3D": "auto",
        "svg": false,
        "skewType": "compensated",
        "scaleX": 1,
        "scaleY": 1
      }
    },
    {
      "nodeText": {},
      "_gsTweenID": "t5",
      "_gsTransform": {
        "perspective": 0,
        "force3D": "auto",
        "svg": false,
        "skewType": "compensated",
        "scaleX": 1,
        "scaleY": 1
      }
    },
    {
      "nodeText": {},
      "_gsTweenID": "t6",
      "_gsTransform": {
        "perspective": 0,
        "force3D": "auto",
        "svg": false,
        "skewType": "compensated",
        "scaleX": 1,
        "scaleY": 1
      }
    },
    {
      "nodeText": {},
      "_gsTweenID": "t7",
      "_gsTransform": {
        "perspective": 0,
        "force3D": "auto",
        "svg": false,
        "skewType": "compensated",
        "scaleX": 1,
        "scaleY": 1
      }
    },
    {
      "nodeText": {},
      "_gsTweenID": "t8",
      "_gsTransform": {
        "perspective": 0,
        "force3D": "auto",
        "svg": false,
        "skewType": "compensated",
        "scaleX": 1,
        "scaleY": 1
      }
    },
    {
      "nodeText": {},
      "_gsTweenID": "t9",
      "_gsTransform": {
        "perspective": 0,
        "force3D": "auto",
        "svg": false,
        "skewType": "compensated",
        "scaleX": 1,
        "scaleY": 1
      }
    },
    {
      "nodeText": {},
      "_gsTweenID": "t10",
      "_gsTransform": {
        "perspective": 0,
        "force3D": "auto",
        "svg": false,
        "skewType": "compensated",
        "scaleX": 1,
        "scaleY": 1
      }
    },
    {
      "nodeText": {},
      "_gsTweenID": "t11",
      "_gsTransform": {
        "perspective": 0,
        "force3D": "auto",
        "svg": false,
        "skewType": "compensated",
        "scaleX": 1,
        "scaleY": 1
      }
    },
    {
      "nodeText": {},
      "_gsTweenID": "t12",
      "_gsTransform": {
        "perspective": 0,
        "force3D": "auto",
        "svg": false,
        "skewType": "compensated",
        "scaleX": 1,
        "scaleY": 1
      }
    },
    {
      "nodeText": {},
      "_gsTweenID": "t13",
      "_gsTransform": {
        "perspective": 0,
        "force3D": "auto",
        "svg": false,
        "skewType": "compensated",
        "scaleX": 1,
        "scaleY": 1
      }
    },
    {
      "nodeText": {},
      "_gsTweenID": "t14",
      "_gsTransform": {
        "perspective": 0,
        "force3D": "auto",
        "svg": false,
        "skewType": "compensated",
        "scaleX": 1,
        "scaleY": 1
      }
    },
    {
      "nodeText": {},
      "_gsTweenID": "t15",
      "_gsTransform": {
        "perspective": 0,
        "force3D": "auto",
        "svg": false,
        "skewType": "compensated",
        "scaleX": 1,
        "scaleY": 1
      }
    },
    {
      "nodeText": {},
      "_gsTweenID": "t16",
      "_gsTransform": {
        "perspective": 0,
        "force3D": "auto",
        "svg": false,
        "skewType": "compensated",
        "scaleX": 1,
        "scaleY": 1
      }
    }
  ]
}
```