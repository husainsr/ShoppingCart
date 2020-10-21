export const menuArray: any = [
  {
    displayName: 'Login',
    code: '000',
    children: []
  },
  {
    displayName: 'Master',
    code: 'ma',
    children: [
      {
        displayName: 'User',
        code: '001'
      },
      {
        displayName: 'User Role',
        code: '017'
      },
      {
        displayName: 'Company',
        code: '002'
      },
      {
        displayName: 'Branch',
        code: '003'
      },
      {
        displayName: 'Material',
        code: '004'
      },
      {
        displayName: 'Pack',
        code: '007'
      },
      {
        displayName: 'LOT',
        code: '022'
      },
      {
        displayName: 'Count',
        code: '023'
      },
      {
        displayName: 'Basis',
        code: '076'
      },
      {
        displayName: 'Balance',
        code: '042'
      },
      {
        displayName: 'Format',
        code: '082'
      },
    ]
  },
  {
    displayName: 'GRN Printing',
    code: 'gr',
    children: [
    {
      displayName: 'Goods Receive Notes',
      code: 'go',
      children: [
          {
            displayName: 'GRN Prepare',
            code: '009'
          },
          {
            displayName: 'GRN Review',
            code: '057'
          },
          {
            displayName: 'GRN Approve',
            code: '058'
          }
        ]
    },
    {
      displayName: 'Retest Material',
      code: 're',
      children: [
          {
            displayName: 'Retest Prepare',
            code: '024'
          },
          {
            displayName: 'Retest Approve',
            code: '061'
          },
          {
            displayName: 'Receive By',
            code: '081'
          }
        ]
    },
    {
      displayName: 'Material Transfer',
      code: 'mt',
      children: [
          {
            displayName: 'Code to Code - Prepare',
            code: '018'
          },
          {
            displayName: 'Code to Code - Approve',
            code: '065'
          },
          {
            displayName: 'Branch to Branch - Prepare',
            code: '019'
          },
          {
            displayName: 'Branch to Branch - Approve',
            code: '066'
          },
          {
            displayName: 'Code to Code (Diff.Branch) - Prepare',
            code: '020'
          },
          {
            displayName: 'Code to Code (Diff.Branch) - Approve',
            code: '067'
          }
        ]
    },
    {
      displayName: 'Transferred Material Transaction',
      code: 'tr',
      children: [
        {
          displayName: 'Code to Code',
          code: '025'
        },
        {
          displayName: 'Branch to Branch',
          code: '026'
        },
        {
          displayName: 'Code to Code (Diff.Branch)',
          code: '027'
        }
      ]
    },
    {
      displayName: 'Material Return',
      code: 'mr',
      children: [
          {
            displayName: 'Prepare',
            code: '056'
          },
          {
            displayName: 'Review',
            code: '059'
          },
          {
            displayName: 'Approve',
            code: '060'
          }
        ]
    },
    {
      displayName: 'Sales Order',
      code: '083'
    }
    ]
  },
  {
    displayName: 'Q.C',
    code: 'qc',
    children: [
      {
        displayName: 'Q.C Acceptance',
        code: '073'
      },
      {
        displayName: 'Sample for Analysis Label Printing',
        code: '045'
      },
      {
        displayName: 'Reserved Sample Label Printing',
        code: '046'
      },
      {
        displayName: 'Sampling (Container) Label',
        code: '011'
      },
      {
        displayName: 'Q.C Debit',
        code: '047'
      },
      {
        displayName: 'Sampling (Rejected Material)',
        code: '123'
      },
      {
        displayName: 'Q.C Approval Rejection - Prepare',
        code: '074'
      },
      {
        displayName: 'Q.C Approval Rejection - Review',
        code: '068'
      },
      {
        displayName: 'Q.C Approval Rejection - Approve',
        code: '069'
      },
      {
        displayName: 'Approval Rejection Modification',
        code: '080'
      },
      {
        displayName: 'Q.C Rejection of Approved Material',
        code: 'aw',
        children: [
          {
            displayName: 'Q.C Rejection of Approved Material - Prepare',
            code: '075'
          },
          {
            displayName: 'Q.C Rejection of Approved Material - Approve',
            code: '078'
          }
        ]
      },
      {
        displayName: 'Q.C Approval of Rejected Material',
        code: 'zx',
        children: [
          {
            displayName: 'Q.C Approval of Rejected Material - Prepare',
            code: '077'
          },
          {
            displayName: 'Q.C Approval of Rejected Material - Approve',
            code: '079'
          }
        ]
      },
      {
        displayName: 'Sampled Qty Addition',
        code: '052'
      },
      {
        displayName: 'Sampled Qty Subtraction',
        code: '053'
      }
    ]
  },
  {
    displayName: 'Physical Rejection/Destruction',
    code: 'pr',
    children: [
      {
        displayName: 'Physical Rejection',
        code: '013'
      },
      {
        displayName: 'Destruction',
        code: '072'
      }
    ]
  },
  {
    displayName: 'Material Dispensing',
    code: 'md',
    children: [
      {
        displayName: 'Work Order',
        code: '015'
      },
      {
        displayName: 'Manual Slip',
        code: '038'
      },
      {
        displayName: 'Manual Issuance',
        code: '051'
      },
      {
        displayName: 'Material Shortage',
        code: '048'
      },
      {
        displayName: 'Material Excess',
        code: '049'
      },
      {
        displayName: 'W.O Weight Verification Process',
        code: '084'
      }
    ]
  },
  {
    displayName: 'Material Hold/Un-hold',
    code: 'hu',
    children: [
      {
        displayName: 'Material Hold',
        code: '054'
      },
      {
        displayName: 'Material Un-Hold',
        code: '055'
      }
    ]
  },
  {
    displayName: 'Label Printing Log',
    code: 'lp',
    children: [
      {
        displayName: 'GRN Label',
        code: '031'
      },
      {
        displayName: 'Q.C Rejected Label',
        code: '033'
      },
      {
        displayName: 'Work Order Label',
        code: '037'
      },
      {
        displayName: 'Manual Slip Label',
        code: '039'
      },
      {
        displayName: 'Raw Material Return Label',
        code: '050'
      }
    ]
  },
  {
    displayName: 'Utility',
    code: 'ut',
    children: [
      {
        displayName: 'Change Password',
        code: '028'
      },
      {
        displayName: 'Unlock User & System',
        code: '029'
      },
      {
        displayName: 'Password Policy',
        code: '030'
      },
      {
        displayName: 'Auto Mail Configuration',
        code: '090'
      }
    ]
  },
];
