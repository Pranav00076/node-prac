if not root:
    return -1

if (p < root.val and q < root.val):
    return self.lowestCommonAncestor(root.left, p, q)
elif (p > root.val and q > root.val):
    return self.lowestCommonAncestor(root.right, p, q)
else:
    dummy = root
    dummy2 = root
    f1 = False
    f2 = False

    while dummy:
        if dummy.val > p:
            dummy = dummy.left
        elif dummy.val < p:
            dummy = dummy.right
        else:
            f1 = True
            break

        while dummy2:
            if dummy2.val > q:
                dummy2 = dummy2.left
            elif dummy2.val < q:
                dummy2 = dummy2.right
            else:
                f2 = True
                break

            if f1 and f2:
                return root
            else:
                return None
